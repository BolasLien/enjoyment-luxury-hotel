import { Box, useTheme, useMediaQuery } from '@mui/material';
import Dot from '@src/assets/images/dot.png';

const DecoTop = () => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return (
    <Box
      position={'absolute'}
      top={isDesktop ? '100px' : '40px'}
      right={isDesktop ? '180px' : '24px'}
      width={isDesktop ? '200px' : '100px'}
      height={isDesktop ? '200px' : '100px'}
    >
      <img src={Dot} alt="deco" width="100%" height="100%" />
    </Box>
  );
};

export default DecoTop;
