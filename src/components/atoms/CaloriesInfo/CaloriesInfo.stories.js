import React from 'react';
import CaloriesInfo from './CaloriesInfo';
/* eslint-disable react/jsx-props-no-spreading */
const Template = (args) => <CaloriesInfo {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  value: 725,
};

export default {
  title: 'Atoms/CaloriesInfo',
  component: CaloriesInfo,
};
