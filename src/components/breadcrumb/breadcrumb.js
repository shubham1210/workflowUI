import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import * as React from 'react';

function handleClick(event) {
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb() {
  const linkURL = window.location.pathname

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      <b>HOME</b>
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href={linkURL}
      onClick={handleClick}
    >
      <b>{linkURL.substring(1).toUpperCase()}</b>
    </Link>
  ];
  return (
    <Stack spacing={1}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}