export interface ILocalUser {
  uid: string;
  name: string;
  email: Email;
  facebook: Facebook;
  personal: Personal;
  campus: Campus;
}

export interface Facebook {
  Token: string;
  facebookID: string;
  facebookLink: string;
}

export interface Email {
  value: string;
  verified: boolean;
  varificationSent: boolean;
}

export interface Promocode {
  invite: string;
  used: string;
}

export interface Personal {
  birthday: string;
  city: string;
  college: string;
  yearOfStudy: string;
  postalAddress: string;
  zipcode: number;
  phoneNumber: string;
  whatsAppNumber: string;
  picture: string;
  gender: string;
}

export interface Campus {
  isAmbassador: boolean;
  posts: Array<string>;
  referralCode: string;
  validPosts: Array<string>;
  likes: number;
  shares: number;
  otherPoints: number;
  ideaPoints: number;
  totalPoints: number;
  isExclusive: boolean;
  rank: boolean;
  exclusiveApproved: boolean;
}

export interface Registration {
  manifest: Array<number>;
}

export interface Payment {
  status: boolean;
  orders: Array<number>;
  all: Array<number>;
}

export class LocalUser implements ILocalUser {
  teamid: string;
  name: string;
  uid: string;
  firstUpdate: boolean;
  email: Email;
  facebook: Facebook;
  promocode: Promocode;
  personal: Personal;
  campus: Campus;
  registration: Registration;
  payment: Payment;
}
