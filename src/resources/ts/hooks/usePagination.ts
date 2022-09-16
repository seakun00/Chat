import { useState } from 'react';

export const usePagination = (rows = 10, currentPage = 1) => {
    const [page, setPage] = useState(currentPage);

    return {
        rows: rows,
        page: page,
        setPage: setPage,
    };
};
