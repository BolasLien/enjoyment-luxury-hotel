import { ReactNode } from 'react';
import { Container, SxProps, ContainerProps } from '@mui/material';

const HomePageContainer = ({
  children,
  sx,
  ...props
}: { children: ReactNode; sx?: SxProps } & ContainerProps) => {
  return (
    <Container maxWidth={'lg'} disableGutters sx={{ minHeight: '100vh', ...sx }} {...props}>
      {children}
    </Container>
  );
};

export default HomePageContainer;
