'use client';

import { useAuth } from '@/context/AuthContext';
import { Button } from '@mui/material';
import React from 'react';

export default function HeroActionButton() {
  const { signIn } = useAuth();

  return (
    <Button variant="contained" color="primary" size="large" onClick={signIn}>
      Get Started
    </Button>
  );
}
