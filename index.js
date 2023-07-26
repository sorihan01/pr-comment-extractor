const axios = require('axios');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

const fetchComments = async (repoPath) => {
    try {
        const response = await axios.get(`https://api.github.com/repos/${repoPath}/comments`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': `token ${process.env.GITHUB_TOKEN}`
            }
        });

        const formattedComments = response.data.map(comment => ({
            commenter: comment.user.login,
            comment: comment.body,
        }));

        const date = new Date();
        const timestamp = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}_${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;

        const dir = './comments';

        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }

        const filePath = path.join(dir, `comments_${timestamp}.json`);

        fs.writeFile(filePath, JSON.stringify(formattedComments, null, 2), (err) => {
            if (err) throw err;
            console.log(`Comments saved to ${filePath}`);
        });
    } catch (error) {
        console.error('Error fetching comments:', error.message);
    }
}

const repoPath = process.argv[2];
fetchComments(repoPath);
