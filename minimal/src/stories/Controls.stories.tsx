import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import React from 'react';

interface AnyProps {

}

const AnyComponent:React.FC<AnyProps> = () =>
{
    return <p> HI </p>
}


const meta: Meta<typeof AnyComponent> = {
  title: "Controls",
  component: AnyComponent,
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ['autodocs'],
  argTypes: {
    propertyA: {
      options: ['Item One', 'Item Two', 'Item Three'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
    active: { control: 'boolean' },
    even: { control: { type: 'number', min:2, max:30, step: 2 } },
    number_no_step: { control: { type: 'number', min:2, max:30 } },
    number_micro_step: { control: { type: 'number', min:2, max:30, step: 0.1 } },
    odd: { control: { type: 'range', min: 1, max: 39, step: 2 } },
    range_no_step: { control: { type: 'range', min: 1, max: 39 } },
    range_micro_step: { control: { type: 'range', min: 1, max: 39, step: 0.1 } },
    user: { control: 'object' },
    avatar: { control: { type: 'file', accept: '.png' } },
    contact: { control: 'radio', options: ['email', 'phone', 'mail'] },
    contact_inline: { control: 'inline-radio', options: ['email', 'phone', 'mail'] },
    contact_check: { control: 'check', options: ['email', 'phone', 'mail'] },
    age: { control: 'select', options: [20, 30, 40, 50] },
    countries: { control: 'multi-select', options: ['USA', 'Canada', 'Mexico'] },
    label: { control: 'text' },
    color: { control: { type: 'color', presetColors: ['red', 'green']} },
    startDate: { control: 'date' },
    array: { control: 'array'},
},
};
export default meta;

type Story = StoryObj<typeof AnyComponent>;

export const Default: Story = {
    args: {
        propArray: [1, 2, 3],
        propNum: 1,
        
    }
};
