import { ReactNode } from 'react';
import { Typography, useTheme, useMediaQuery } from '@mui/material';

const RoomInfoTitle = ({ children }: { children: ReactNode }) => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return (
    <Typography variant={isDesktop ? 'Title_16px_B' : 'Subtitle_14px_B'}>{children}</Typography>
  );
};
export default RoomInfoTitle;
