import { Dispatch, useState, SetStateAction, useEffect } from 'react';
import clsx from 'clsx';
import ReactPaginate from 'react-paginate';

export type PaginationState = { pageIndex: number; pageSize: number };

type Props = {
  setPagination: Dispatch<SetStateAction<PaginationState>>;
  pagination: PaginationState;
  className?: string;
  totalPages: number;
};

export const Pagination = ({
  setPagination,
  totalPages,
  pagination,
  className,
}: Props) => {
  const [page, setPage] = useState(pagination.pageIndex);

  useEffect(() => {
    setPage(pagination.pageIndex);
  }, [pagination.pageIndex]);

  function goto(value: number) {
    const pageNumber = value > Number(totalPages) - 1 ? 0 : value;
    setPage(pageNumber);

    setPagination((prev: any) => ({
      ...prev,
      pageIndex: pageNumber,
    }));

    return;
  }

  function handleChange(_value: any) {
    const value = Number(_value);

    if (isNaN(value) || !totalPages || !setPagination) return;

    if (value > totalPages) {
      goto(totalPages - 1);
    } else if (value < 1) {
      goto(0);
    } else {
      goto(value - 1);
    }
  }

  if (!totalPages || totalPages < 1) return null;

  return (
    <div id='react_paginate_wrapper' className={clsx('relative', className)}>
      <ReactPaginate
        forcePage={page}
        breakLabel='...'
        breakClassName={'my-auto'}
        className='x-center flex w-full gap-1 py-4 text-neutral-440 font-medium'
        onPageChange={({ selected }) => handleChange(selected + 1)}
        pageLinkClassName={clsx(
          'h-10 640:h-12 mx-auto text-center y-center w-8',
        )}
        activeClassName={
          'rounded-full w-10 640:w-12 bg-neutral-70 font-medium text-neutral-main'
        }
        pageRangeDisplayed={1}
        pageCount={totalPages ?? 1}
        nextLabel={false}
        previousLabel={false}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
