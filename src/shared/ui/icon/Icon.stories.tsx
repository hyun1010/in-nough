import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '..';

const meta = {
  title: 'Component/Icon',
  component: Icon.Plus,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Icon.Plus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icons = () => (
  <div className="flex flex-wrap gap-2 ">
    <Icon.Plus />
    <Icon.Search />
  </div>
);
