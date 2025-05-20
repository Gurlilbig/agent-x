// src/controllers/requestController.js
const processRequest = (req, res) => {
  try {
    // Handle the challenge verification
    if (req.body && req.body.type === 'url_verification') {
      console.log('Received challenge verification request from Slack.');
      res.set('Content-Type', 'text/plain');
      return res.status(200).send(req.body.challenge);
    }

    // Process the event
    const content = req.body;
    console.log('Received event from Slack:', content);

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