'use client';

import { Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { initialValues } from './initialValues';
import { validationSchema } from './validationSchema';
import { Form } from './Form';
import emailjs from '@emailjs/browser';

export const GetInTouchForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const timeout = useRef<any>(null);

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);

  async function sendMail(
    firstName: string,
    lastName: string,
    companyName: string,
    message: string,
    email: string,
    onSuccess: () => void,
  ) {
    setIsLoading(true);
    setError('');

    const service_id = 'service_pfm5g6i';
    const template_id = 'template_yav7pl2';
    const public_key = 'MdOtwSf9lCveAN3Rd';

    emailjs
      .send(
        service_id,
        template_id,
        {
          firstName,
          lastName,
          companyName,
          message,
          reply_to: email,
          from_name: email,
        },
        public_key,
      )
      .then(() => {
        onSuccess();

        setIsLoading(false);

        setMessage('Your message has been sent successfully');

        timeout.current = setTimeout(() => {
          setMessage('');
        }, 4000);
      })
      .catch((reason) => {
        setIsLoading(false);

        setError(
          String(reason.status).charAt(0) !== '4'
            ? reason.text
            : 'An error occurred',
        );
      });
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(
        { firstName, lastName, companyName, message, email },
        { resetForm },
      ) => {
        sendMail(firstName, lastName, companyName, message, email, resetForm);
      }}
      validateOnBlur={false}
    >
      {(formikProps) => {
        return (
          <Form
            {...{
              error,
              message,
              formikProps,
              processing: isLoading,
            }}
          />
        );
      }}
    </Formik>
  );
};
