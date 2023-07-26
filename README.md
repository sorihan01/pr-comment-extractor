# GitHub PR Comments Fetcher

GitHub PR Comments Fetcher is a Node.js application that fetches comments from a specific GitHub pull request and saves them into a JSON file in the 'comments' directory. This can be useful for analyzing and learning from code reviews.

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- A GitHub account with necessary permissions to access the pull request comments.

### Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2. Navigate into the project folder:

    ```bash
    cd your-repository
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory of the project and add your GitHub token:

    ```bash
    echo "GH_TOKEN=your_github_token" >> .env
    ```

   Replace `your_github_token` with your actual GitHub token.

## 🏃 Usage

To run the script, use the command below and replace `'owner/repo'` and `'pull_request_number'` with your actual values:

```bash
node fetchComments.js '{owner}/{repo}/pulls/{pull_request_number}'
```

### Example

Run the script using the following command, replacing 'owner', 'repo' and 'pull_request_number' with your actual values:

```bash
node fetchComments.js 'lightspeed-hospitality/lighthouse-insights/pulls/364'
```

This will generate a JSON file in the 'comments' directory. You can then take the data from the 'comments' directory, and use a tool like OpenAI's ChatGPT to extract important learning points. 
- For instance, you could generate a list of best practices, reminders, or common points of feedback from your code reviews


## 🔐 Security
Keep your GitHub token secure. Never expose your token in your code or version control system. Please refer to GitHub's guide for creating a personal access token and authorizing your token for use with SSO.

## 🔮 Future Plans
Send JSON to a learning management system to add to your list of best practice reminders.
Develop a plugin that will track all your messages, giving you suggestions as you code based on your code reviews, and update the ones you no longer need as it becomes second nature.
