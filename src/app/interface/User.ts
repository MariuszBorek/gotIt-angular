export class User {
  constructor(
    public id: number,
    public email: string,
    public password: string,
    public name: string,
    public surname: string,
    public accountDescription: string,
    public accountCreationDate: Date,
    public avatar: string,
    public accountType: string) {}
}
