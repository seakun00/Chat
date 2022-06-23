import { ValidationError } from "@/ts/error/ValidationError";
import { validationErrorType } from "@/ts/http/errorResponseType";

export const client = (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => (
    fetch(input, init)
        .then(async (data) => {
            if (data.ok) return data.json()

            const json = await data.json()
            if (!json.type) throw new Error(json.message)

            switch (json.type) {
                case validationErrorType:
                    const userMessages = pickUserMessages(json.user_messages);
                    throw new ValidationError(json.message, userMessages);
                default:
                    throw new Error('Unexpected error type.');
            }
        })
);

export const getCsrfToken = (): string | null | undefined => {
    return document.head
        .querySelector('meta[name="csrf-token"]')
        ?.getAttribute('content');
};

/**
 * フォームごとに複数あるエラーメッセージを1つに変換する
 *
 * Laravelはフォームごとに複数のエラーメッセージを返すが、Material-UIのhelperTextは1つのエラーメッセージしか表示できない。
 * 複数のエラーメッセージを同時に表示したいケースも多くないので、エラーメッセージは1つずつ表示する。
 */
const pickUserMessages = (userMessages: Record<string, any>): Record<string, string> => {
    const pickedMessages: Record<string, string> = {};
    for (const key in userMessages) {
        pickedMessages[key] = userMessages[key][0];
    }

    return pickedMessages;
}
