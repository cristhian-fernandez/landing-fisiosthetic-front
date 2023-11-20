import { useState, ChangeEvent, FormEvent } from 'react';
import { FormFields, UseFormOptions } from '../types';

const useForm = ({
  initialValues = {},
  onSubmit,
  validate,
}: UseFormOptions) => {
  const [formValues, setFormValues] = useState<FormFields>(initialValues);
  const [errors, setErrors] = useState<FormFields>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    if (isSubmitted) {
      setErrors({});
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate) {
      const validationErrors = validate(formValues);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setIsSubmitted(true);
        return;
      }
    }
    await onSubmit(formValues);
  };

  return {
    formValues,
    handleInputChange,
    handleSubmit,
    errors,
  };
};

export default useForm;
