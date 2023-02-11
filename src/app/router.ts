import { build } from './build';
import { routerPaths } from './routerPaths';

export const router = async (): Promise<void> => {
  let hash = window.location.hash.slice(1).split('/');
  console.log(hash[0]);
  
  await build(routerPaths[hash[0]]);
};
