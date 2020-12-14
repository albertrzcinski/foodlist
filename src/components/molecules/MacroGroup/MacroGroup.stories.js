import React from 'react';
import MacroGroup from './MacroGroup';

const dummyMacros = [
  {
    value: 25,
    desc: 'Protein',
  },
  {
    value: 17,
    desc: 'Fat',
  },
  {
    value: 60,
    desc: 'Carbs',
  },
];
/* eslint-disable react/jsx-props-no-spreading */
export const Template = (args) => <MacroGroup macros={dummyMacros} {...args} />;

const Primary = Template.bind({});

Primary.args = {
  isBig: false,
  gap: '',
};

export default {
  title: 'Molecules/MacroGroup',
  component: MacroGroup,
};
