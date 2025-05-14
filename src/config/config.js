// src/config/config.js
module.exports = {
  port: process.env.PORT || 3002,
  nodeEnv: process.env.NODE_ENV || 'development',
  openaiApiKey: process.env.OPENAI_API_KEY,
  notionApiKey: process.env.NOTION_API_KEY,
  notionDbs: {
    taskDb: process.env.NOTION_TASK_DB,
    teamDb: process.env.NOTION_TEAM_DB,
    clientDb: process.env.NOTION_CLIENT_DB,
    outputLogDb: process.env.NOTION_OUTPUT_LOG_DB,
    approvalDb: process.env.NOTION_APPROVAL_DB
  }
};