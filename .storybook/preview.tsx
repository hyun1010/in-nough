import type { Preview } from '@storybook/react';
import React from 'react';
import { dm_sans, noto_sans } from '../src/app/fonts';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`${noto_sans.variable} ${dm_sans.variable} font-dm-sans`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
