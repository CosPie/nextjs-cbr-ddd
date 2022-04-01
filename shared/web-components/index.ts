import lazy from 'next/dynamic';
import { FC } from 'react';

export const MyButtonElement = lazy(() => import('./button.wc'), {
  ssr: false,
}) as FC<{
  onClick: Function;
}>;
