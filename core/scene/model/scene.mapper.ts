import { pick } from 'ramda';
import { SceneEntity } from './scene.entity';
import { SceneModel } from './scene.model';

export const mapTo = (entity: SceneEntity): SceneModel => {
  return pick(['name'], entity);
};
