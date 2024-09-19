import { Input } from '@/components/form-elements/Input';
import { SubmitButton } from '@/components/form-elements/SubmitButton';
import { TextArea } from '@/components/form-elements/Textarea';
import { Form as FormikForm, FormikProps } from 'formik';
import { initialValues } from './initialValues';

interface Props {
  formikProps: FormikProps<typeof initialValues>;
  processing: boolean;
  error: string;
  message: string;
}

export const Form = ({ processing, error, message, formikProps }: Props) => {
  const { handleSubmit } = formikProps;

  return (
    <FormikForm
      onSubmit={handleSubmit}
      className={'p-5 768:p-10 rounded-2xl border border-neutral-100'}
    >
      <div className='640:flex gap-4'>
        <Input
          label='First Name'
          placeholder={'Enter your first name'}
          autoFocus
          name='firstName'
        />

        <Input
          label='Last Name'
          placeholder={'Enter your last name'}
          name='lastName'
        />
      </div>

      <div className='640:flex gap-4'>
        <Input
          label='Email Address'
          placeholder={'Enter your email address'}
          name='email'
        />

        <Input
          label='Company Name'
          placeholder={'Enter your company name'}
          name='companyName'
        />
      </div>

      <TextArea
        label='Message'
        placeholder={'Enter your message'}
        name='message'
      />

      {error && (
        <div className='border-red-500 text-sm border mt-4 bg-red-400 p-3 bg-opacity-30 rounded-lg'>
          {error}
        </div>
      )}

      {message && (
        <div className='border-green-500 text-sm border mt-4 bg-green-400 p-3 bg-opacity-30 rounded-lg'>
          {message}
        </div>
      )}

      <div className='flex'>
        <SubmitButton submitting={processing} className='mt-8 primary-button'>
          Send Message
        </SubmitButton>
      </div>
    </FormikForm>
  );
};
