// const mongoose = require('mongoose');

// const CategoryASchema = new mongoose.Schema({
//   mandal: String,
//   gramPanchayat: String,
//   propertyDetails: {
//     description: String,
//     surveyNo: String,
//     extent: String,
//     boundaries: String,
//   },
//   possessionDetails: {
//     type: { type: String },
//     ownershipDetails: { type: String },
//     layoutNo: { type: String },
//   },
//   encroachmentDetails: {
//     identified: String,
//     actionTaken: String,
//   },
//   photos: {
//      beforePhoto: {
//        lat: String,
//        lon: String,
//        photoUrl: String,
//      },
//      afterPhoto: {
//        lat: String,
//        lon: String,
//        photoUrl: String,
//      },
//     },
//   remarks: String,
// });

// // Use the Object type or subdocument type
// const CategoryA = mongoose.model('CategoryA', CategoryASchema);

// module.exports = CategoryA;


const mongoose = require('mongoose');

const CategoryASchema = new mongoose.Schema({
  mandalName: String,
  secretariatNameCode: String,
  employeeName: String,
  employeeId: String, // <-- added
  designation: String,
  psVroGrade: String,
  dob: Date,
  doj: Date,
  hrmsId: String,
  cfmsId: String,
  emailId: String,
  mobileNumber: String,
  aadhaarNumber: String,
  rationalizationPosition: String,
  lastUpdatedDate: Date,
  transferredRecently: String,
  salaryDrawingPresent: String,
  salaryDrawingOffice: String,
  employmentType: String,
  deputationLocation: String
});

const CategoryA = mongoose.model('CategoryA', CategoryASchema);

module.exports = CategoryA;

