import React from 'react';

export const Plus = React.lazy(() =>
  import('./IconPlus').then((module) => ({ default: module.IconPlus }))
);

export const Search = React.lazy(() =>
  import('./IconSearch').then((module) => ({ default: module.IconSearch }))
);

export const Alarm = React.lazy(() =>
  import('./IconAlarm').then((module) => ({ default: module.IconAlarm }))
);
