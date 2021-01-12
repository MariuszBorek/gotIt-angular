export class AuctionDTO {
  constructor(
    public id: number,
    public description: string,
    public photo: string,
    public category: string,
    public minPrice: string,
    public buyNowPrice: string,
    public promotedAuction: boolean,
    public localization: string,
    public dateOfIssue: Date,
    public endDate: Date,
    public numberOfVisits: number) {}
}
