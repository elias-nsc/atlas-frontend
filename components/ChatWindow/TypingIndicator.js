import React from 'react';
import { Box } from '@mui/material';

export default function TypingIndicator() {
  return (
    <Box sx={{ 
      display: 'flex',
      alignItems: 'center',
      padding: '6rem',
      pl: '6rem'
    }}>
      <img 
        src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif" 
        alt="Digitando..."
        style={{ 
          width: '50px',
          height: '30px',
          objectFit: 'contain'
        }}
      />
    </Box>
  );
}