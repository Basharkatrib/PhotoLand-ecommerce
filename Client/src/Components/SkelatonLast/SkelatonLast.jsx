import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';


function Media({count , width}) {

  return (
    <div className='flex w-full justify-between gap-5'>
      {(Array.from(new Array(count))).map((item, index) => (
        <div className='w-full  basis-[20%]' style={{flexBasis : `${width}%`}} sx={{ bgcolor: '#616161'}} key={index} >
            <Skeleton variant="rectangular" sx={{ bgcolor: '#616161' }} height={250} />
              <Skeleton sx={{ bgcolor: '#616161' }} />
              <Skeleton sx={{ bgcolor: '#616161' }} />
        </div>
      ))}
    </div>
  );
}


export default function SkelatonLast({count , width}) {
  return (
    <div className='flex w-full'>
      <Media count={count} width={width}/>
    </div>
  );
}