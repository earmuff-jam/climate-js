'use client';

import * as React from 'react';

import { Roboto } from 'next/font/google';

import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { NextAppDirEmotionCacheProvider } from './EmotionCache';
import { lightTheme } from '@/theme/Theme';

const theme = createTheme(lightTheme);

export default function ThemeRegistry({ children }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
