const mongoose = require('mongoose');

const previousAcademicRecordSchema = new mongoose.Schema({
    institution: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    yearOfPassing: {
      type: Number,
      required: true,
    },
    percentage : {
        type: Number,
      required: true,
    }
  });

const admissionFormSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName : {
    type: String,
  },
  lastName : {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique : true
  },
  phone: {
    type: String,
    required: true,
    unique : true
  },
  dateofBirth: {
    type: Date,
    required: true,
  },
  admissionSoughtForClass:{
    type: String,
    required: true
  },
  placeOfBirth : {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  religion : {
    type: String,
    required: true
  },
  cast : {
    type: String,
    required: true
  },
  residenceAddress : {
    type: String,
    required: true
  },
  motherToung : {
    type: String,
    required: true
  },
  pinCode : {
    type: Number,
    required: true
  },
  bloodGroup : {
    type: String,
    required: true
  },
  generalBehavior : {
    type: String,
    enum: ['Normal', 'HyperActive', 'Mild'],
    required: true,
  },
  motherName :{
    type: String,
    required: true
  },
  fatherName : {
    type: String,
    required: true
  },
  fatherOccupation : {
    type: String,
    required: true
  },
  motherOccupation : {
    type: String,
    required: true
  },
  fatherPhoneNumber : {
    type: String,
    required: true
  },
  motherPhoneNumber : {
    type: String,
    required: true
  },
  previousAcademicRecord :  [previousAcademicRecordSchema],

  languagePreference: {
    type: String,
    required: true,
  },

});


const AdmissionForm = mongoose.model('AdmissionForm', admissionFormSchema);

module.exports = AdmissionForm;