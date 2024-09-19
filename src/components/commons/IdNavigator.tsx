import clsx from 'clsx';

type Props = {
  id: string;
  className?: string;
};

export const IdNavigator = ({ id, className }: Props) => {
  return (
    <div className={clsx(`relative h-0`, className)}>
      <div
        className='absolute -top-[155px] z-0 h-1 w-full bg-transparent'
        id={id}
      ></div>
    </div>
  );
};
