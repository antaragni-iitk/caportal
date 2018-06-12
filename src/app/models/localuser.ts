export interface IAntUser {
  uid: string;
  displayName: string;
  email: string | null;
}

export class AntUser implements IAntUser {
  public levelsCurrent: Array<string>;
  public levelsRequested: Array<string>;
  public uid: string;
  public displayName: string;
  email: string | null;
  constructor(localUser) {
    this.levelsCurrent = localUser.levelsCurrent;
    this.levelsRequested = localUser.levelsRequested;
    this.uid = localUser.uid;
    this.displayName = localUser.displayName;
  }
}
