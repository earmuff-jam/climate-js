import React from 'react';
import { Typography, Box } from '@mui/material';
import HeroActionButton from '@/app/landing/components/HeroActionButton';

export default function HeroContent() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Typography sx={{ fontSize: '6rem', fontWeight: 700 }} color={'text.secondary'} gutterBottom>
        Climate
      </Typography>
      <Typography variant="h2" color="text.secondary" gutterBottom sx={{ maxWidth: '600px' }}>
        The future of Asset Management.
      </Typography>
      <Typography variant="h4" color="text.secondary" gutterBottom sx={{ maxWidth: '600px' }}>
        Intuitive. Powerful. Seamless.
      </Typography>
      <Box sx={{ my: 4, maxWidth: '600px' }}>
        <Typography variant="body1" color="text.secondary">
          Manage your assets effortlessly.
        </Typography>
      </Box>
      <HeroActionButton />
    </Box>
  );
}
