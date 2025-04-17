import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
export default function Skelaton({count}) {

 
  return (
    <Box>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton key={index} sx={{ bgcolor: '#616161' }} />
      ))}
    </Box>
  );
}