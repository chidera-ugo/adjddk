import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `ContentBlock`.
 */
export type ContentBlockProps = SliceComponentProps<Content.ContentBlockSlice>;

/**
 * Component for "ContentBlock" Slices.
 */
const ContentBlock = ({ slice }: ContentBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for content_block (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ContentBlock;
