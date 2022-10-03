export class TodoEntity {
  private _id: number;
  private _taskName: string;
  private _status: number;
  private _createdDate: Date;
  private _updatedDate: Date;

  public get id(): number {
    return this._id;
  }

  public set id(theId: number) {
    this._id = theId;
  }

  public get taskName(): string {
    return this._taskName;
  }

  public set taskName(theTaskName: string) {
    this._taskName = theTaskName;
  }

  public get status(): number {
    return this._status;
  }

  public set status(theStatus: number) {
    this._status = theStatus;
  }

  public get createdDate(): Date {
    return this._createdDate;
  }

  public set createdDate(theCreatedDate) {
    this._createdDate = theCreatedDate;
  }

  public get updatedDate(): Date {
    return this._updatedDate;
  }

  public set updatedDate(theUpdatedDate) {
    this._updatedDate = theUpdatedDate;
  }
}
