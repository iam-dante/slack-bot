const { IncomingWebhook } = require('@slack/webhook');

require('dotenv').config();
const url = process.env.WEBHOOK_URL;

const webhook = new IncomingWebhook(url);

// Send the notification
(async () => {
  await webhook.send({
    text: '신기하군요',
  });
})();