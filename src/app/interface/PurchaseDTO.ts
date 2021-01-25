export class PurchaseDTO {
  constructor(
    public auctionId: number,
    public title: string,
    public description: string,
    public photo: string,
    public category: string,
    public localization: string,
    public endDate: Date,
    public price: string) { }
}
