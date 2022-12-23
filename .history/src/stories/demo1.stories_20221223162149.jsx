import React from 'react';
import { Demo1 } from './demo1'


export default {
  title: 'Example/项目案例',
  argTypes: {
  },
  decorators: [
    (Story) => (
      <div style={{ height: '200px' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Demo1 {...args} />;

export const 第一个案例 = Template.bind({});

第一个案例.args = {
};