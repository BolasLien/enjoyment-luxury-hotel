import { Grid, Typography, useTheme, useMediaQuery } from '@mui/material';

const SectionNewsTitleDesktop = () => {
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
          height: '2px',
          bottom: '-40px',
          background: `linear-gradient(90deg, ${palette.hotelPrimary[100]}, ${palette.neutral[0]})`,
        },
      }}
    >
      <Typography component={'h1'} variant="H1_48px_B" sx={{ color: palette.hotelPrimary[100] }}>
        最新消息
      </Typography>
    </Grid>
  );
};

const SectionNewsTitleMobile = () => {
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
          height: '2px',
          bottom: '-24px',
          background: `linear-gradient(90deg, ${palette.hotelPrimary[100]}, ${palette.neutral[0]})`,
        },
      }}
    >
      <Typography component={'h3'} variant="H3_32px_B" sx={{ color: palette.hotelPrimary[100] }}>
        最新消息
      </Typography>
    </Grid>
  );
};

const SectionNewsTitle = () => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return isDesktop ? <SectionNewsTitleDesktop /> : <SectionNewsTitleMobile />;
};

export default SectionNewsTitle;
