export class TodoDTO {
  private _taskName: string;

  public get taskName(): string {
    return this._taskName;
  }

  public set taskName(theTaskName: string) {
    this._taskName = theTaskName;
  }
}
