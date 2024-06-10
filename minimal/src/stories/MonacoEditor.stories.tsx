import type { Meta, StoryObj } from '@storybook/react';
import MonacoEditor, {App, defaultProps} from './MonacoCodeblock'
import React from 'react';

const meta: Meta<typeof MonacoEditor> = {
    title: "Monaco",
    component: MonacoEditor,
    //👇 Enables auto-generated documentation for this component and includes all stories in this file
    tags: ['autodocs'],
  };
export default meta;
  
type Story = StoryObj<typeof MonacoEditor>;
  
export const Default: Story = {
    args : defaultProps
};
  
export const sApp = () => <App/>