import React from 'react';
import { useLocation } from 'react-router-dom';

const jobs = () => {
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

  return <div>{content}</div>;
};

export default jobs;
