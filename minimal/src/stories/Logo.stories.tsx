import type { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';
import { defaultProps } from './Logo';

const meta: Meta<typeof Logo> = {
    title:'Logo',
    component: Logo,
    //👇 Enables auto-generated documentation for this component and includes all stories in this file
    tags: ['autodocs'],
  };
export default meta;
  
type Story = StoryObj<typeof Logo>;
  
export const Default: Story = {
    args: defaultProps
};
