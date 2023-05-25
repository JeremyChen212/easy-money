import React from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from './BackButton';

export default function Jobs(){
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchParam = queryParams.get('search');

  let content;
    
  if (searchParam === 'dogs') {
    content = 'Dogs';
  } else if (searchParam === 'cats') {
    content = 'Cats';
  } else {
    content = 'Unknown';
  }
  console.log(searchParam)
  return (
        <>
            <BackButton/>
            <div className='text-center my-40 whitespace-nowrap'>Here are some jobs as a <span className='underline'> {searchParam}</span></div>;
        </>
    )
};

