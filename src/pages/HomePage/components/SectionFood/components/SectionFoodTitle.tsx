import { Grid, Typography, useTheme, useMediaQuery } from '@mui/material';

const SectionFoodTitleDesktop = () => {
  const { palette } = useTheme();
  return (
    <Grid
      width={'140px'}
      position={'relative'}
      sx={{
        '&:after': {
          content: '""',
          position: 'absolute',
          display: 'block',
          width: '140px',
          height: '3px',
          top: '50%',
          left: '100%',
          background: `linear-gradient(90deg, ${palette.hotelPrimary[100]}, ${palette.neutral[0]})`,
        },
      }}
    >
      <Typography component={'h1'} variant="H1_48px_B" sx={{ color: palette.hotelPrimary[100] }}>
        佳餚
        <br />
        美饌
      </Typography>
    </Grid>
  );
};

const SectionFoodTitleMobile = () => {
  const { palette } = useTheme();
  return (
    <Grid
      width={'140px'}
      position={'relative'}
      sx={{
        '&:after': {
          content: '""',
          position: 'absolute',
          display: 'block',
          width: '140px',
          height: '3px',
          top: '50%',
          left: '80%',
          background: `linear-gradient(90deg, ${palette.hotelPrimary[100]}, ${palette.neutral[0]})`,
        },
      }}
    >
      <Typography component={'h3'} variant="H3_32px_B" sx={{ color: palette.hotelPrimary[100] }}>
        佳餚
        <br />
        美饌
      </Typography>
    </Grid>
  );
};

const SectionFoodTitle = () => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return isDesktop ? <SectionFoodTitleDesktop /> : <SectionFoodTitleMobile />;
};

export default SectionFoodTitle;
