import IParseMailTemplateDTO from '../dtos/iParseMailTemplatedto';
import IMailTemplateProvider from '../models/iMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse({ template }: IParseMailTemplateDTO) {
    return template;
  }
}
