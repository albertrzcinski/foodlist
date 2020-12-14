import React from 'react';
import ScalableInput from './ScalableInput';

export const Primary = () => (
  <ScalableInput label="Protein" labelFor="protein" value={0}>
    <input type="text" id="protein" />
  </ScalableInput>
);
export const Calories = () => (
  <ScalableInput isKcal label="calories" labelFor="calories" value={0}>
    <input type="text" id="calories" />
  </ScalableInput>
);

export default {
  title: 'Atoms/ScalableInput',
  component: ScalableInput,
};
