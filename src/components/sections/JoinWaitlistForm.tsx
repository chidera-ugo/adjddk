import { SubmitButton } from '@/components/form-elements/SubmitButton';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Form, Formik, Field } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { object, string } from 'yup';

interface Props {
  standalone?: boolean;
  className?: string;
  onSuccess?: () => void;
}

export const JoinWaitlistForm = ({
  className,
  standalone,
  onSuccess,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  async function joinWaitlist(email: string, reset: () => void) {
    try {
      setIsLoading(true);

      const _res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/pre-register`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ email }),
        },
      );

      const res = await _res.json();

      setIsLoading(false);

      if (res.message !== 'success')
        return toast(res.message, { type: 'info' });

      toast.success(res.message, { type: 'success' });

      reset();

      if (!onSuccess) return;

      onSuccess();
    } catch (err) {
      setIsLoading(false);

      console.error(err);

      toast('Failed to join waitlist', { type: 'error' });
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: standalone ? 0 : 0.6,
        delay: standalone ? 0 : 0.4,
      }}
      className={'w-full'}
    >
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={object({
          email: string(),
        })}
        onSubmit={({ email }, { resetForm }) => {
          joinWaitlist(email, resetForm);
        }}
        validateOnBlur={false}
      >
        {({ handleSubmit }) => {
          return (
            <Form
              onSubmit={handleSubmit}
              className={clsx(
                'mt-8',
                className,
                standalone
                  ? 'w-full'
                  : '560:flex align-middle 960:justify-start justify-center 560:w-auto w-full gap-4',
              )}
            >
              <div className='relative'>
                <div className='absolute left-0 top-0 h-full w-10 x-center'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    className={'my-auto'}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M18.125 5.625V14.375C18.125 15.4105 17.2855 16.25 16.25 16.25H3.75C2.71447 16.25 1.875 15.4105 1.875 14.375V5.625M18.125 5.625C18.125 4.58947 17.2855 3.75 16.25 3.75H3.75C2.71447 3.75 1.875 4.58947 1.875 5.625M18.125 5.625V5.82726C18.125 6.47837 17.7872 7.08287 17.2327 7.42412L10.9827 11.2703C10.38 11.6411 9.61996 11.6411 9.01732 11.2703L2.76732 7.42412C2.21279 7.08287 1.875 6.47837 1.875 5.82726V5.625'
                      stroke='#9EA5AD'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>

                <Field
                  placeholder={'Enter email address'}
                  name={'email'}
                  autoFocus={standalone}
                  className={clsx(
                    standalone ? 'w-full' : 'w-full 560:w-[300px]',
                    'pl-9 rounded-full smooth focus:border-primary-main focus:ring-0 shadow-sm h-11 border placeholder-neutral-400 border-neutral-100',
                  )}
                />
              </div>

              <SubmitButton
                type={'submit'}
                submitting={isLoading}
                className={clsx(
                  'primary-button h-11',
                  !standalone
                    ? '560:mt-0 mt-3 w-full flex-shrink-0 560:w-[140px]'
                    : 'w-full mt-5',
                )}
              >
                Join Waitlist
              </SubmitButton>
            </Form>
          );
        }}
      </Formik>
    </motion.div>
  );
};
