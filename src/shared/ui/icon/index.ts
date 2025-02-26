import React from 'react';

export const Plus = React.lazy(() =>
  import('./IconPlus').then((module) => ({ default: module.IconPlus }))
);
