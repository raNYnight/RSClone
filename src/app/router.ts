import { build } from './build';
import { routerPaths } from './routerPaths';

export const router = async (): Promise<void> => {
  let hash = window.location.hash.slice(1);
  await build(routerPaths[hash]);
};
