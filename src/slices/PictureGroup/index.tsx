import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `PictureGroup`.
 */
export type PictureGroupProps = SliceComponentProps<Content.PictureGroupSlice>;

/**
 * Component for "PictureGroup" Slices.
 */
const PictureGroup = ({ slice }: PictureGroupProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for picture_group (variation: {slice.variation})
      Slices
    </section>
  );
};

export default PictureGroup;
