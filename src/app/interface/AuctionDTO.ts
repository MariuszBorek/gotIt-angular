export class AuctionDTO {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public photo: string,
    public category: string,
    public buyNowPrice: string,
    public startMinPrice: string,
    public promotedAuction: boolean,
    public localization: string,
    public dateOfIssue: Date,
    public endDate: Date,
    public numberOfVisits: number,
    public finished: boolean,
    public owner: string,
    public isAuction: boolean) {}
}
