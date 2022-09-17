import {
    loginErrorType,
    validationErrorType,
} from '@/ts/http/error/errorResponseType';
import { ValidationError } from '@/ts/http/error/ValidationError';
import { LoginError } from '@/ts/http/error/LoginError';

export const createError = (error: Record<string, any>) => {
    switch (error.type) {
        case validationErrorType: {
            const userMessages = pickUserMessages(error.user_messages);
            return new ValidationError(error.message, userMessages);
        }
        case loginErrorType:
            return new LoginError(error.message);
        default:
            throw new Error('Unexpected error type.');
    }
};

/**
 * フォームごとに複数あるエラーメッセージを1つに変換する
 *
 * Laravelはフォームごとに複数のエラーメッセージを返すが、Material-UIのhelperTextは1つのエラーメッセージしか表示できない。
 * 複数のエラーメッセージを同時に表示したいケースも多くないので、エラーメッセージは1つずつ表示する。
 */
const pickUserMessages = (
    userMessages: Record<string, any>
): Record<string, string> => {
    const pickedMessages: Record<string, string> = {};
    for (const key in userMessages) {
        pickedMessages[key] = userMessages[key][0];
    }

    return pickedMessages;
};
