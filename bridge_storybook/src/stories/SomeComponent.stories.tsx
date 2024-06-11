import type { Meta, StoryObj } from '@storybook/react';
import SomeComponent, { defaultInput } from './SomeComponent';

const meta: Meta<typeof SomeComponent> = {
    component: SomeComponent,
    //👇 Enables auto-generated documentation for this component and includes all stories in this file
    tags: ['autodocs'],
  };
  export default meta;
  
  type Story = StoryObj<typeof SomeComponent>;
  
  export const Default: Story = {
    args: defaultInput
  };

