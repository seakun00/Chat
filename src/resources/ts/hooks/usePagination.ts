import { useState } from "react";

export const usePagination = (rows: number = 10, currentPage: number = 1) => {
    const [page, setPage] = useState(currentPage);

    return {
        rows: rows,
        page: page,
        setPage: setPage,
    }
}
