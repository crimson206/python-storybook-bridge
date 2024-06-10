import type { Meta, StoryObj } from '@storybook/react';
import { PythonComponent, defaultProps  } from './PythonComponent';


const meta: Meta<typeof PythonComponent> = {
  title: "Python",
  component: PythonComponent,
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof PythonComponent>;

export const Default: Story = {
  args: defaultProps
};
