import React from 'react';
import { theme } from 'theme/theme';
import Paragraph from './Paragraph';
/* eslint-disable react/jsx-props-no-spreading */
const Template = (args) => <Paragraph {...args}>{args.text}</Paragraph>;

export const Primary = Template.bind({});

Primary.args = {
  size: theme.size.s,
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,
};
