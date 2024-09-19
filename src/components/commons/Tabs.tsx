import { SetStateAction, Dispatch } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export type TabOption = { name: string; value: string };

type Props = {
  tabs: TabOption[];
  className?: string;
  currentTab: TabOption;
  setCurrentTab?: Dispatch<SetStateAction<TabOption>>;
  action?: (tab: TabOption) => void;
  layoutId?: string; // To track the tab animation
  sliderClassname?: string;
  duration?: number;
  displayValueClassname?: string;
  tabClassname?: string;
};

export const Tabs = ({
  tabs,
  className,
  layoutId,
  duration = 0.1,
  displayValueClassname,
  currentTab,
  setCurrentTab,
  sliderClassname,
  tabClassname,
  action,
}: Props) => {
  return (
    <div
      className={clsx(
        className ?? 'rounded-lg',
        'hidden-scrollbar w-full overflow-x-auto bg-neutral-150',
      )}
    >
      <div className={`my-auto flex h-full w-full p-1 align-middle`}>
        {tabs?.map((tab) => {
          const displayValue = tab.name;

          const isActive = tab['value'] === (currentTab as any)?.['value'];

          return (
            <button
              onClick={() => {
                if (setCurrentTab) setCurrentTab(tab);

                if (action) action(tab);
              }}
              id={`tabs-${displayValue}`}
              key={displayValue}
              type='button'
              className={clsx(
                'relative h-9 px-3 transition-none',
                tabClassname ?? 'w-full',
              )}
            >
              <span
                className={clsx(
                  `y-center smooth relative z-10 h-full flex-shrink-0 text-sm font-medium`,
                  isActive
                    ? 'text-white'
                    : displayValueClassname ?? 'text-neutral-main',
                )}
              >
                {displayValue}
              </span>

              {isActive && (
                <motion.div
                  className='absolute inset-0 z-0 h-9 w-full'
                  transition={{
                    duration,
                  }}
                  layoutId={layoutId}
                >
                  <div
                    className={clsx(
                      `h-full w-full shadow-sm`,
                      sliderClassname ?? 'rounded-md',
                    )}
                  ></div>
                </motion.div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
