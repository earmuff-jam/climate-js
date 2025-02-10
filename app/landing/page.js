'use client';

import React from 'react';
import { Stack } from '@mui/material';
import HeroContent from '@/app/landing/components/HeroContent';
import Header from '@/app/landing/components/Header';

export default function LandingPage() {
  return (
    <Stack>
      <Header />
      <HeroContent />
    </Stack>
  );
}
