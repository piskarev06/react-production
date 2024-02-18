import { lazy } from 'react';

export const AboutPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        // eslint-disable-next-line
        // @ts-expect-error
        resolve(import('./AboutPage'));
      }, 1500);
    })
);
