import ISendMailDTO from '../dtos/iSendMailDTO';
import IMailProvider from '../models/iMailProvider';

export default class FakeMailProvider implements IMailProvider {
  private messages: ISendMailDTO[] = [];

  public async sendMail(message: ISendMailDTO): Promise<void> {
    this.messages.push(message);
  }
}
