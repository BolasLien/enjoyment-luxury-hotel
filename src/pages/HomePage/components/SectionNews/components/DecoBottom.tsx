import { Box, useTheme, useMediaQuery } from '@mui/material';
import Dot from '@src/assets/images/dot.png';

const DecoBottom = () => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return (
    <Box
      position={'absolute'}
      bottom={isDesktop ? '-80px' : '-60px'}
      left={isDesktop ? '200px' : '24px'}
      width={isDesktop ? '200px' : '100px'}
      height={isDesktop ? '200px' : '100px'}
    >
      <img src={Dot} alt="deco" width="100%" height="100%" />
    </Box>
  );
};

export default DecoBottom;
