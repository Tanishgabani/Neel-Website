const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    industry: {
      type: String,
      enum: ['Automotive', 'Cell & Battery Manufacturing', 'Consumer', 'Industrial', 'Virgin Metals', 'Intermediates', 'Copper Scrap', 'Other'],
    },
    inquiryType: {
      type: String,
      enum: ['raw_materials', 'recycling', 'epr_partnership', 'general'],
      default: 'general',
    },
    materialVolume: {
      type: String,
      enum: ['under_20mt', 'over_20mt', 'not_applicable'],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
    },
    status: {
      type: String,
      enum: ['new', 'read', 'replied'],
      default: 'new',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);
