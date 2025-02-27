import { extendTailwindMerge } from 'tailwind-merge';
import * as config from '../../../tailwind.config';

const FontSizeArray = Object.keys(config.default.theme.extend.fontSize);

export const twAllMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': FontSizeArray.map((size) => `text-${size}`),
    },
  },
});
