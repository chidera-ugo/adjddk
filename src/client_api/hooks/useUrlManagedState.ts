import {
  defaultStringifySearch,
  simpleParseSearch,
} from '@/client_api/search_params';
import { PaginationState } from '@/components/commons/table/Pagination';
import { defaultBlogPageSize } from '@/constants/blog';
import { getKeysFromZodSchema } from '@/helpers/getters/getKeysFromZodSchema';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ZodObject, ZodRawShape } from 'zod';

export const useUrlManagedState = <T extends ZodRawShape>(
  schema: ZodObject<T>,
  searchParams: any,
  pageSize?: number,
  disableUrlState?: boolean,
) => {
  const _defaultPageSize = pageSize ?? 10;

  const schemaKeys = getKeysFromZodSchema(schema);

  function validateSearchParams() {
    const data: Record<string, any> = {};

    for (const i of schemaKeys) {
      data[i] = simpleParseSearch(searchParams[i]);
    }

    return schema.parse(data);
  }

  const [filters, setFilters] = useState<Record<string, any>>({});

  const [pagination, setPagination] = useState<PaginationState>(
    {} as PaginationState,
  );

  const { replace } = useRouter();

  const pathname = usePathname();

  useEffect(() => {
    const { pagination, ...search } = validateSearchParams();

    setFilters(search);
    getPaginationFromUrl(pagination);
  }, []);

  useEffect(() => {
    if (disableUrlState) return;

    replace(
      `${pathname}${defaultStringifySearch({ ...filters, pagination })}`,
      {
        scroll: false,
      },
    );
  }, [filters, pagination]);

  function getPaginationFromUrl(pagination: any) {
    if (!pagination) return resetPagination();

    const pageIndex = parseInt(pagination.pageIndex);
    const pageSize = parseInt(pagination.pageSize);

    if (
      isNaN(pageIndex) ||
      isNaN(pageSize) ||
      ![defaultBlogPageSize].includes(pageSize)
    )
      return resetPagination();

    setPagination({ pageIndex, pageSize });
  }

  function resetPagination() {
    setPagination({
      pageIndex: 0,
      pageSize: _defaultPageSize,
    });
  }

  return {
    filters,
    setFilters,
    pagination,
    setPagination,
    resetPagination,
  };
};

export type UseUrlManagedState = ReturnType<typeof useUrlManagedState>;
