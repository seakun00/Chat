import { Box, CircularProgress } from '@mui/material';
import React from 'react';

// TODO: ページのデザインが固まったらSkeletonで読み込みイメージを実装する
export const Loading = () => (
    <Box component="div" sx={{ textAlign: 'center' }}>
        <CircularProgress />
    </Box>
);
