import {createError} from "@/ts/http/error/errorFactory";

export const client = (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => (
    fetch(input, init)
        .then(async (data) => {
            if (data.ok) return data.json()

            const error = await data.json()
            if (error.type) throw createError(error)

            throw new Error(error.message)
        })
);

export const getCsrfToken = (): string | null | undefined => {
    return document.head
        .querySelector('meta[name="csrf-token"]')
        ?.getAttribute('content');
};
