export class NewAuctionDTO {
  constructor(
    public category: string,
    public title: string,
    public description: string,
    public minPrice: string,
    public buyNowPrice: string,
    public promotedAuction: boolean,
    public endDate) { }
}
