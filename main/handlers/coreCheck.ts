import { PlatformCoreMapping } from '../../core/types';
import { getAllCoresFromDisk } from '../utils';

export default async function coreCheck(): Promise<PlatformCoreMapping[]> {

  return await getAllCoresFromDisk();
}
