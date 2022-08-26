export interface UID {
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
  photo: string;
}

export interface NPCI {
  aadharLinkageStatus: boolean;
  accountNumber: string;
  accountType: string;
}

export interface PAN {
  id: string;
  name: string;
  dob: string;
  fathersName: string;
  aadharNumber: string;
}

export interface BankAccount {
  accountNumber: string;
  accountType: string;
  bankName: string;
  branchName: string;
  ifscCode: string;
  holderName: string;
  panNumber: string;
  aadharNumber: string;
}

export interface Verify {
  uid: string;
  pan: string;
  bankAccount: string;
  verified: false;
}
