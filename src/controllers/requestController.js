// src/controllers/requestController.js
const processRequest = (req, res) => {
  try {
    // Handle the challenge verification request from Slack
    if (req.body.challenge && req.body.type === 'url_verification') {
      console.log('Received challenge verification request from Slack.');
      res.set('Content-Type', 'text/plain');
      return res.status(200).send(req.body.challenge);
    }

    const now = new Date();
    let inputData = {};
    const source = req.query.query;

    if (source === 'Slack') {
      console.log('From Slack.'); 
      const content = req.body;
      console.log('Received event:', content);
      inputData = {'source': source, 'input_text': content.event.text, 'metadata': {'timestamp': now, 'channel': content.event.channel}};
      console.log('Input data becomes:', inputData);
    }

    if (source === 'Fathom') {
      console.log('From Fathom.');
      const content = req.body;
      console.log('Received event:', content);
      inputData = {'source': source, 'input_text': content.transcript, 'metadata': {'timestamp': now, 'name': content.name, 'id': content.id}};
      console.log('Input data becomes:', inputData);
    }

    // Acknowledge receipt of the event
    return res.status(200).send();
  } catch (error) {
    console.error('Error processing Slack event:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  processRequest
};