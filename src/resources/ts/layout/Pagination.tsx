import React from 'react';
import {
    Pagination as BasePagination,
    PaginationProps as BasePaginationProps,
} from '@mui/material';

type PaginationProps = BasePaginationProps & {
    rows: number;
    total: number;
    onChangePage: (page: number) => void;
};

export const Pagination = (props: PaginationProps) => {
    const count = Math.ceil(props.total / props.rows);
    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        props.onChangePage(page);
    };

    return (
        <BasePagination
            count={count}
            page={props.page}
            onChange={handleChange}
        />
    );
};
