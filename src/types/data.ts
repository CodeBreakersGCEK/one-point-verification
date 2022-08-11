// uid=999941057058
// name=Shivshankar Choudhury
// dob=13-05-1968
// dobt=V
// gender=M
// phone=2810806979
// email=sschoudhury@dummyemail.com
// street=12 Maulana Azad Marg
// vtc=New Delhi
// subdist=New Delhi
// district=New Delhi
// state=New delhi
// pincode=110002

export type UID = {
  uid: string;
  name: string;
  dob: string;
  dobt: string;
  gender: string;
  phone: string;
  email: string;
  street: string;
  vtc: string;
  subdist: string;
  district: string;
  state: string;
  pincode: string;
};

// 1. Input data:
// i. Aadhaar number
// ii. Destination bank code(eg: 508508)
// iii. Account number
// iv. Customer Consent
// v. Filler 1
// vi. Filler 2
// Responding entity: Bank
// Response to be provided:
// 1. Aadhaar Linkage Status (Y or N)
// 2. Account status
// 3. Subsidy Account Flag( Y or N)
// 4. Account Number (only last 4 digits)
// 5. Account type

export type NPCI = {
  aadharLinkageStatus: boolean;
  accountNumber: string;
  accountType: string;
};

export type PAN = {
  id: string;
  name: string;
  dob: string;
  fathersName: string;
};

export type BankAccount = {
  accountNumber: string;
  accountType: string;
  bankName: string;
  branchName: string;
  ifscCode: string;
  holderName: string;
  panNumber: string;
  aadharNumber: string;
};
