import { Field } from '@/types/Common';
import { useField } from 'formik';
import clsx from 'clsx';
import { useEffect } from 'react';

type Props = JSX.IntrinsicElements['input'] & Field;

export const Input = ({
  className,
  limit,
  type = 'text',
  next,
  label,
  ...props
}: Props) => {
  const [field, meta] = useField(props.name as string);
  const id = props.id ?? props.name;

  useEffect(() => {
    if (next && field.value?.length === limit) {
      document.getElementById(next)?.focus();
    }
  }, [field.value]);

  return (
    <div className={clsx(className, 'mt-5 w-full')}>
      <div className='flex'>
        <label htmlFor={id} className='text-left'>
          {label}
        </label>
      </div>

      <input
        {...props}
        {...field}
        {...{ id, type }}
        value={field.value ?? ''}
        className={clsx(
          meta.touched && meta.error ? 'border-error-main' : '',
          'input w-full',
          !!field.value ? 'bg-white' : 'bg-neutral-150',
        )}
      />

      {meta.touched && meta.error ? (
        <div className='input-error'>{meta.error}</div>
      ) : null}
    </div>
  );
};
