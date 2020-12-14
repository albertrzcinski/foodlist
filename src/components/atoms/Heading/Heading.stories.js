import React from 'react';
import { theme } from 'theme/theme';
import Heading from './Heading';
/* eslint-disable react/jsx-props-no-spreading */
const Template = (args) => <Heading {...args}>{args.text}</Heading>;

export const Primary = Template.bind({});

Primary.args = {
  medium: false,
  size: theme.size.l,
  text: 'Lorem ipsum dolor sit amet.',
};

export default {
  title: 'Atoms/Heading',
  component: Heading,
};
