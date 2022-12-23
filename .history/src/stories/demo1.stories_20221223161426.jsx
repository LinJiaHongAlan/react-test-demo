import React from 'react';
import { Demo1 } from './demo1'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/第一个案例',
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Demo1 {...args} />;

export const Primary = Template.bind({});

Primary.args = {
};