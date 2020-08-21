const express = require('express');

const smartInsightsTemplate = require('../views/capabilities/smart-insights');

const router = express.Router();

router.get('/smart-insights', (req, res) => {
    res.send(smartInsightsTemplate());
});

  module.exports = router;