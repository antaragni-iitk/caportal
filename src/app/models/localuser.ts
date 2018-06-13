export interface ILocalUser {
  uid: string;
  displayName: string;
  email: string | null;
}

export interface email{
   value: string;
   verified: boolean;
   varificationSent: boolean;
}

export interface facebook{
  id: string;
  token: string;
  expires_at: date;
}
export interface promocode{
  invite: string;
  used: string;
}
export interface personal{
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
export interface campus{
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

export interface registration{
  manifest: Array<number>;
}

export interface payment{
  status: boolean;
  orders: Array<number>;
  all: Array<number>;
}
export class LocalUser implements ILocalUser {
  name: string;
  teamid:  string;
 firstUpdate: boolean;
 progress: number ;
  constructor(localUser) {
    this.levelsCurrent = localUser.levelsCurrent;
  this.levelsRequested = localUser.levelsRequested;
    this.uid = localUser.uid;
    this.displayName = localUser.displayName;
  }
}
