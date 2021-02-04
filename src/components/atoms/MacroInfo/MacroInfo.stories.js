import React from 'react';
import MacroInfo from './MacroInfo';
/* eslint-disable react/jsx-props-no-spreading */
const Template = (args) => <MacroInfo {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  big: false,
  kcal: false,
  value: '25',
  desc: 'protein',
};

export default {
  title: 'Atoms/MacroInfo',
  component: MacroInfo,
};
