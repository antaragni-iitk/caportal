export interface ILocalUser {
  uid: string;
  displayName: string;
  email: string | null;
}

export interface Email{
   value: string;
   verified: boolean;
   varificationSent: boolean;
}

export interface Facebook{
  id: string;
  token: string;
  expires_at: date;
}
export interface Promocode{
  invite: string;
  used: string;
}
export interface Personal{
  birthday: string;
   city: string;
   college: string;
   yearOfStudy: string;
   postalAddress: string;
   zipcode: number;
   phoneNumber: string;
   whatsAppNumber: string;
   picture: string;
}
export interface Campus{
  isAmbassador: boolean;
   posts:  Array<number>;
   validPosts:  Array<number>;
  likes: number;
  shares: number;
  otherPoints: number;
  ideaPoints: number;
  totalPoints: number;
  isExclusive: boolean;
  rank: boolean;
  exclusiveApproved: boolean;
}

export interface Registration{
  manifest: Array<number>;
}

export interface Payment{
  status: boolean;
  orders: Array<number>;
  all: Array<number>;
}
export class LocalUser implements ILocalUser {
  name: string;
  teamid:  string;
 firstUpdate: boolean;
 progress: number ;
  email: Email;
  facebook: Facebook;
  promocode: Promocode;
  personal: Personal;
  campus: Campus;
  registration: Registration;
  payment: Payment;
  constructor(localUser) {
    this.levelsCurrent = localUser.levelsCurrent;
  this.levelsRequested = localUser.levelsRequested;
    this.uid = localUser.uid;
    this.displayName = localUser.displayName;
  }
}
