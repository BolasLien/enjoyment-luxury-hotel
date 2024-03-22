import { Grid, Typography, Theme, Box, useTheme, useMediaQuery } from '@mui/material';

const SectionHeroHotelNameDesktop = () => {
  return (
    <Grid
      flex={'1 1 100%'}
      minWidth={'290px'}
      sx={{
        color: (theme: Theme) => theme.palette.hotelPrimary[100],
      }}
    >
      <Typography variant="H2_40px_B" component="h2" mb={1}>
        享樂酒店
      </Typography>
      <Typography variant="H5_24px_B" component="h5" mb={5}>
        Enjoyment Luxury Hotel
      </Typography>
      <Box
        width="100%"
        height="2px"
        borderRadius="2px"
        sx={{
          background: (theme: Theme) =>
            `linear-gradient(90deg, ${theme.palette.hotelPrimary[100]}, ${theme.palette.neutral[0]})`,
        }}
      />
    </Grid>
  );
};

const SectionHeroHotelNameMobile = () => {
  return (
    <Grid
      container
      direction={'column'}
      alignItems={'center'}
      sx={{
        width: '100%',
        maxWidth: '100vw',
        color: (theme: Theme) => theme.palette.hotelPrimary[100],
      }}
    >
      <Typography variant="H4_28px_B" component="h4" mb={1}>
        享樂酒店
      </Typography>
      <Typography variant="Title_16px_B" mb={'20px'}>
        Enjoyment Luxury Hotel
      </Typography>
      <Box
        width="2px"
        height="84px"
        borderRadius="2px"
        sx={{
          background: (theme: Theme) =>
            `linear-gradient(180deg, ${theme.palette.hotelPrimary[100]}, ${theme.palette.neutral[0]})`,
        }}
      />
    </Grid>
  );
};

const SectionHeroHotelName = () => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return isDesktop ? <SectionHeroHotelNameDesktop /> : <SectionHeroHotelNameMobile />;
};

export default SectionHeroHotelName;
