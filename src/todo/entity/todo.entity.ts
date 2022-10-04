export class TodoEntity {
  private id: number;
  private taskName: string;
  private status: number;
  private createdDate: Date;
  private updatedDate: Date;

  public get getId(): number {
    return this.id;
  }

  public set setId(theId: number) {
    this.id = theId;
  }

  public get getTaskName(): string {
    return this.taskName;
  }

  public set setTaskName(theTaskName: string) {
    this.taskName = theTaskName;
  }

  public get getStatus(): number {
    return this.status;
  }

  public set setStatus(theStatus: number) {
    this.status = theStatus;
  }

  public get getCreatedDate(): Date {
    return this.createdDate;
  }

  public set setCreatedDate(theCreatedDate: Date) {
    this.createdDate = theCreatedDate;
  }

  public get getUpdatedDate(): Date {
    return this.updatedDate;
  }

  public set setUpdatedDate(theUpdatedDate: Date) {
    this.updatedDate = theUpdatedDate;
  }
}
