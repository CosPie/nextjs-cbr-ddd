import { CloudServerHandlers } from './cloudServer';
import { HeathyCheckHandlers } from './healthy';

/** mock api handlers */
export const handlers = [...HeathyCheckHandlers, ...CloudServerHandlers];
