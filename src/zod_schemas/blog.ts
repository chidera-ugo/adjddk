import { paginationZodSchema } from '@/zod_schemas/commons';
import { z } from 'zod';

export const blogZodSchema = z
  .object({
    group: z
      .object({
        name: z.string(),
        value: z.string(),
      })
      .catch({
        name: 'All',
        value: 'all',
      }),
  })
  .merge(paginationZodSchema);
