const Newsletter = require('../models/Newsletter');

exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email is required' });

    const existing = await Newsletter.findOne({ email });
    if (existing) {
      if (existing.active) return res.status(409).json({ message: 'You are already subscribed!' });
      existing.active = true;
      await existing.save();
      return res.json({ message: 'Welcome back! You have been re-subscribed.' });
    }

    await Newsletter.create({ email });
    res.status(201).json({ message: 'Thank you for subscribing to our newsletter!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.unsubscribe = async (req, res) => {
  try {
    const { email } = req.body;
    await Newsletter.findOneAndUpdate({ email }, { active: false });
    res.json({ message: 'You have been unsubscribed successfully.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
