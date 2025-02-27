import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '..';
import { IconSearch } from '../icon/IconSearch';

const meta = {
  title: 'Component/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    prefixIcon: () => <IconSearch />,
  },
};
