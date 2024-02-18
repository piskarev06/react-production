import { lazy } from 'react';

export const MainPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        // eslint-disable-next-line
        // @ts-expect-error
        resolve(import('./MainPage'));
      }, 1500);
    })
);
