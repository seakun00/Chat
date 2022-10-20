import React from 'react';
import {
    Dialog as BaseDialog,
    LinearProgress,
    DialogProps as BaseDialogProps,
} from '@mui/material';

type DialogProps = BaseDialogProps & {
    isLoading: boolean;
};

export const Dialog = ({ isLoading, children, ...props }: DialogProps) => (
    <BaseDialog {...props}>
        {isLoading ? <LinearProgress /> : null}
        {children}
    </BaseDialog>
);
