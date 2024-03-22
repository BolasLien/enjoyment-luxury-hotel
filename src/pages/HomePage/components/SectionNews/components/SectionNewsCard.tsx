import { Stack, Grid, Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { News } from '@src/apis/home/news';

const SectionNewsCardDesktop = ({ title, description, image }: News) => {
  const { palette } = useTheme();
  return (
    <Stack display={'flex'} direction={'row'} spacing={3} alignItems={'center'}>
      <Box
        width="100%"
        maxWidth="474px"
        height="294px"
        maxHeight={'294px'}
        borderRadius={2}
        overflow={'hidden'}
        flex={'1 0 474px'}
        bgcolor={palette.hotelPrimary[10]}
        display={'flex'}
        alignItems={'center'}
      >
        <img src={image} alt={description} width="100%" height="auto" />
      </Box>
      <Grid
        container
        direction={'column'}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
        flex={'1 1 auto'}
      >
        <Typography variant="H3_32px_B" color={palette.neutral[100]} component={'h3'} mb={3}>
          {title}
        </Typography>
        <Typography variant="Body_16px_R" color={palette.neutral[80]}>
          {description}
        </Typography>
      </Grid>
    </Stack>
  );
};

const SectionNewsCardMobile = ({ title, description, image }: News) => {
  const { palette } = useTheme();
  return (
    <Stack display={'flex'} direction={'column'} spacing={3} alignItems={'center'}>
      <Box
        width="100%"
        maxWidth="351px"
        height="294px"
        maxHeight={'294px'}
        borderRadius={2}
        overflow={'hidden'}
        flex={'1 0 294px'}
        bgcolor={palette.hotelPrimary[10]}
        display={'flex'}
        alignItems={'center'}
      >
        <img src={image} alt={description} width="100%" height="auto" />
      </Box>
      <Grid
        container
        direction={'column'}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
        flex={'1 1 auto'}
      >
        <Typography variant="H4_28px_B" color={palette.neutral[100]} component={'h4'} mb={1}>
          {title}
        </Typography>
        <Typography variant="Body2_14px_R" color={palette.neutral[80]}>
          {description}
        </Typography>
      </Grid>
    </Stack>
  );
};

const SectionNewsCard = ({ news }: { news: News }) => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return isDesktop ? SectionNewsCardDesktop(news) : SectionNewsCardMobile(news);
};

export default SectionNewsCard;
