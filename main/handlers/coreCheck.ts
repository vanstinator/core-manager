import { MESSAGE_CHANNEL } from '../../core/constants';
import { getCores } from '../services/cores';

export default async function coreCheck(event, args: string[]): Promise<void> {

  const cores = await getCores();

  event.reply(MESSAGE_CHANNEL.coreResponse, cores);

}
