import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Slot`.
 */
export type SlotProps = SliceComponentProps<Content.SlotSlice>;

/**
 * Component for "Slot" Slices.
 */
const Slot = ({ slice }: SlotProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for slot (variation: {slice.variation}) Slices
    </section>
  );
};

export default Slot;
