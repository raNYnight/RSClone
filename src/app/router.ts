import { build } from './build';

export const router = async (): Promise<void> => {
  let hash = window.location.hash.slice(1);
  await build(hash);
};
