import React from 'react';
import { Demo1 } from './demo1'


export default {
  title: 'Example/第一个案例',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Demo1 {...args} />;

export const Primary = Template.bind({});

Primary.args = {
};