import React from 'react';
import Button from './Button';
/* eslint-disable react/jsx-props-no-spreading */
const Template = (args) => <Button {...args}>{args.text}</Button>;

export const Primary = Template.bind({});

Primary.args = {
  secondary: false,
  text: 'Lorem ipsum',
};

export default {
  title: 'Atoms/Button',
  component: Button,
};
