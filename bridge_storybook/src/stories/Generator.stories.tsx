import type { Meta, StoryObj } from '@storybook/react';
import GetStoryStoryPost, { defaultInput } from './GeneratorComponent';

const meta: Meta<typeof GetStoryStoryPost> = {
    component: GetStoryStoryPost,
    //👇 Enables auto-generated documentation for this component and includes all stories in this file
    tags: ['autodocs'],
  };
  export default meta;
  
  type Story = StoryObj<typeof GetStoryStoryPost>;
  
  export const Default: Story = {
    args: defaultInput
  };

