export default class FAQ {
  public id: number;
  public question: string;
  public answer: string;
  public status: string;
  public created_at: string;

  constructor(faq: any= null) {
    this.id         = faq ? faq.id :         null;
    this.question   = faq ? faq.question :   '';
    this.answer     = faq ? faq.answer :     '';
    this.status     = faq ? faq.status :     '';
    this.created_at = faq ? faq.created_at : '';
  }
}
