import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, ErrorMessage } from 'formik';
import Input from 'components/atoms/Input/Input';
import ScalableInput from 'components/atoms/ScalableInput/ScalableInput';
import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import * as Yup from 'yup';
import DashboadContext from 'context';
import { TYPE_OF_MEALS } from 'utilities/constants';
import { matchNumbers } from 'utilities/functions';

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 20px;
  color: ${({ theme }) => theme.color.black};
  transition: all 0.2s;
  touch-action: manipulation;
  cursor: text;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;

  ${({ fit }) =>
    fit &&
    css`
      width: max-content;
    `}
`;

const StyledInput = styled(Input)`
  width: 200px;
`;

const StyledTextArea = styled(Input)`
  width: 100%;
  height: 160px;
  resize: none;
  overflow: auto;

  @media (max-height: 799px) {
    height: 48px;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StyledError = styled(ErrorMessage)`
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.size.s};
  padding: 0 0 5px 5px;
  position: absolute;
  bottom: 5px;
  right: 15px;

  ${({ $small, theme }) =>
    $small &&
    css`
      font-size: ${theme.size.xs};
      bottom: 0;
    `}
`;

const yupShape = Yup.number()
  .min(1, 'It must be greather!')
  .required('Required!')
  .typeError('It must be a number!');

const addItemSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').required('Required!'),
  desc: Yup.string().min(10, 'Type a little more!').required('Required!'),
  time: yupShape,
  servings: yupShape,
  kcal: yupShape,
  protein: yupShape,
  fat: yupShape,
  carbs: yupShape,
  type: Yup.string().required('Required!'),
});

const AddItemForm = ({ onSubmitFn }) => {
  const context = useContext(DashboadContext);

  return (
    <Formik
      initialValues={{
        name: '',
        desc: '',
        time: '',
        servings: '',
        kcal: 0,
        protein: 0,
        fat: 0,
        carbs: 0,
        type: '',
      }}
      validationSchema={addItemSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const content = {
          ...values,
          name: values.name.trim(),
          desc: values.desc.trim(),
        };
        onSubmitFn(content);
        setSubmitting(false);
        context.toggleIsOpen();
        resetForm();
      }}
    >
      {({ values, isSubmitting, handleChange, handleBlur }) => (
        <Form>
          <InputWrapper>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="eg. Oatmeal"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <StyledLabel htmlFor="name"> Name </StyledLabel>
            <StyledError name="name" component="span" />
          </InputWrapper>

          <InputWrapper>
            <StyledTextArea
              as="textarea"
              id="desc"
              name="desc"
              type="text"
              placeholder="Enter description of yours meal..."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.desc}
            />
            <StyledLabel htmlFor="desc"> Description </StyledLabel>
            <StyledError name="desc" component="span" />
          </InputWrapper>

          <FlexWrapper>
            <InputWrapper>
              <StyledInput
                id="time"
                name="time"
                type="text"
                placeholder="in minutes"
                inputmode="numeric"
                pattern="[0-9]*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.time}
              />
              <StyledLabel htmlFor="time"> Preparation Time </StyledLabel>
              <StyledError name="time" component="span" $small />
            </InputWrapper>

            <InputWrapper>
              <StyledInput
                id="servings"
                name="servings"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                placeholder="per meal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.servings}
              />
              <StyledLabel htmlFor="servings"> Servings </StyledLabel>
              <StyledError name="servings" component="span" $small />
            </InputWrapper>
          </FlexWrapper>

          <InputWrapper fit>
            <ScalableInput
              isKcal
              label="calories"
              labelFor="kcal"
              value={matchNumbers(values.kcal)}
            >
              <input
                id="kcal"
                name="kcal"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.kcal}
              />
            </ScalableInput>
            <StyledError $small name="kcal" component="span" />
          </InputWrapper>

          <InputWrapper fit>
            <ScalableInput label="Protein" labelFor="protein" value={matchNumbers(values.protein)}>
              <input
                id="protein"
                name="protein"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.protein}
              />
            </ScalableInput>
            <StyledError $small name="protein" component="span" />
          </InputWrapper>

          <InputWrapper fit>
            <ScalableInput label="fat" labelFor="fat" value={matchNumbers(values.fat)}>
              <input
                id="fat"
                name="fat"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fat}
              />
            </ScalableInput>
            <StyledError $small name="fat" component="span" />
          </InputWrapper>

          <InputWrapper fit>
            <ScalableInput label="carbs" labelFor="carbs" value={matchNumbers(values.carbs)}>
              <input
                id="carbs"
                name="carbs"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.carbs}
              />
            </ScalableInput>
            <StyledError $small name="carbs" component="span" />
          </InputWrapper>

          <InputWrapper fit>
            <Input
              fit
              as="select"
              id="type"
              name="type"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.type}
            >
              <option value="">--Please choose an option--</option>
              <option value={TYPE_OF_MEALS.BREAKFAST}>Breakfast</option>
              <option value={TYPE_OF_MEALS.LUNCH}>Lunch</option>
              <option value={TYPE_OF_MEALS.DINNER}>Dinner</option>
            </Input>
            <StyledLabel htmlFor="type"> Add to: </StyledLabel>
            <StyledError $small name="type" component="span" />
          </InputWrapper>

          <Button secondary type="submit" disabled={isSubmitting}>
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};

AddItemForm.propTypes = {
  onSubmitFn: PropTypes.func.isRequired,
};

export default AddItemForm;
