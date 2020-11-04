import ICreateNotificationsDTO from '../dtos/iCreateNotificationDTO';
import Notification from '../infra/typeorm/schemas/Notification';

export default interface INotificationsRepository {
  create(data: ICreateNotificationsDTO): Promise<Notification>;
}
