const { IncomingWebhook } = require('@slack/webhook');
const url = 'https://hooks.slack.com/services/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';

const webhook = new IncomingWebhook(url);

// Send the notification
(async () => {
  await webhook.send({
    text: '신기하군요',
  });
})();