import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import Input from 'components/atoms/Input/Input';
import ScalableInput from 'components/atoms/ScalableInput/ScalableInput';
import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import * as Yup from 'yup';

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

  & > input,
  textarea {
    width: 100%;
  }
`;

const StyledTextArea = styled(Input)`
  height: 160px;
  resize: none;
  overflow: auto;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StyledErrorMessage = styled(ErrorMessage)`
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.size.s};
  padding: 0 0 5px 5px;
`;

const StyledError = styled(StyledErrorMessage)`
  position: absolute;
  bottom: 5px;
  right: 15px;

  ${({ small, theme }) =>
    small &&
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
});

const AddItemForm = () => (
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
    }}
    validationSchema={addItemSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
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
            <Input
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
            <StyledError name="time" component="span" small />
          </InputWrapper>

          <InputWrapper>
            <Input
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
            <StyledError name="servings" component="span" small />
          </InputWrapper>
        </FlexWrapper>

        <InputWrapper>
          <StyledErrorMessage name="kcal" component="div" />
          <ScalableInput isKcal label="calories" labelFor="kcal" value={values.kcal}>
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
        </InputWrapper>

        <InputWrapper>
          <StyledErrorMessage name="protein" component="div" />
          <ScalableInput label="Protein" labelFor="protein" value={values.protein}>
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
        </InputWrapper>

        <InputWrapper>
          <StyledErrorMessage name="fat" component="div" />
          <ScalableInput label="fat" labelFor="fat" value={values.fat}>
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
        </InputWrapper>

        <InputWrapper>
          <StyledErrorMessage name="carbs" component="div" />
          <ScalableInput label="carbs" labelFor="carbs" value={values.carbs}>
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
        </InputWrapper>

        <Button secondary type="submit" disabled={isSubmitting}>
          Save
        </Button>
      </Form>
    )}
  </Formik>
);

export default AddItemForm;
