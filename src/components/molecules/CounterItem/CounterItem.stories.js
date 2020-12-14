import React from 'react';
import CounterItem from './CounterItem';

// const dummyData = {
//   protein: 25,
//   fat: 17,
//   carbs: 60,
//   kcal: 725,
// };

// /* eslint-disable react/jsx-props-no-spreading */
// export const Template = (args) => <CounterItem data={dummyData} {...args} />;

// const Primary = Template.bind({});

// Primary.args = {
//   name: 'Antipasati rigatoni',
// };

export const Primary = () => <CounterItem name="Antipasati rigatoni" />;

export default {
  title: 'Molecules/CounterItem',
  component: CounterItem,
};
