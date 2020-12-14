import React from 'react';
import plusIcon from 'assets/icons/plus.svg';
import chevronIcon from 'assets/icons/chevron-right.svg';
import ButtonIcon from './ButtonIcon';

export const CardBtn = () => <ButtonIcon icon={chevronIcon} />;

export const NewItemBtn = () => <ButtonIcon secondary icon={plusIcon} />;

export default {
  title: 'Atoms/ButtonIcon',
  component: ButtonIcon,
};
