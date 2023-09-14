const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
const AdmissionForm = mongoose.model('AdmissionForm');


router.post('/submit-form', async (req, res) => {
    try {
      const formData = req.body;
  
      const admissionForm = new AdmissionForm(formData);
      await admissionForm.save();
  
      res.status(200).json({admissionForm,message: 'Admission form submitted successfully' });
    } catch (error) {
      console.error('Error submitting admission form:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  module.exports = router;
