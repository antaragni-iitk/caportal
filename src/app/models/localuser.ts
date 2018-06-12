export interface ILocalUser {
  uid: string;
  displayName: string;
  email: string | null;
}

export class LocalUser implements ILocalUser {
  name: { type: String };
 facebook: {
   id: { type: String, unique: true },
   token: { type: String },
   expires_at: { type: Date }
 };
teamid: { type: String };
promocode: {
   invite: { type: string },
   used: { type: string }
 };
 email: {
   value: { type: String },
   verified: { type: Boolean, default: false },
   verificationSent: { type: Boolean, default: false }
 };
 personal: {
   birthday: { type: String, default: '2017-10-26' },
   city: { type: String },
   college: { type: String },
   yearOfStudy: { type: String },
   postalAddress: { type: String },
   zipcode: { type: Number },
   phoneNumber: { type: String },
   whatsAppNumber: { type: String },
   picture: { type: String }
 };
 firstUpdate: { type: Boolean, default: false };
 campus: {
   isAmbassador: { type: Boolean, default: false },
   posts: { type: Array },
   validPosts: { type: Array },
   likes: { type: Number, default: 0 },
   shares: { type: Number, default: 0 },
   otherPoints: { type: Number, default: 0 },
   ideaPoints: { type: Number, default: 0 },
   totalPoints: { type: Number, default: 0 },
   isExclusive: { type: Boolean, default: false },
   rank: { type: Boolean },
   exclusiveApproved: { type: Boolean, default: false }
 };
 progress: { type: Number };
 registration: {
   mainfest: { type: Array }
 };
 payment: {
   status: { type: Boolean },
   orders: { type: Array },
   all: { type: Array }
 };
  constructor(localUser) {
    this.levelsCurrent = localUser.levelsCurrent;
  this.levelsRequested = localUser.levelsRequested;
    this.uid = localUser.uid;
    this.displayName = localUser.displayName;
  }
}
