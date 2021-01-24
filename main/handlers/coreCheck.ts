import { MESSAGE_CHANNEL } from '../../core/constants';
import { getAllCoresFromDisk } from '../utils';

export default async function coreCheck(event, args: string[]): Promise<void> {

  const cores = await getAllCoresFromDisk();

  event.reply(MESSAGE_CHANNEL.coreResponse, cores);

}
