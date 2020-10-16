import IParseMailTemplateDTO from '../dtos/iParseMailTemplatedto';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
