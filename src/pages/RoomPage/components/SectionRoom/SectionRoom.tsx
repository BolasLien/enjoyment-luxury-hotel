import { useQuery } from '@tanstack/react-query';
import { fetchRoomsList } from '@src/apis/home';
import HomePageContainer from '@src/common/HomePageContainer';
import RoomCard from './components/RoomCard';
import { Stack, Grid, Typography, Theme, useTheme, useMediaQuery } from '@mui/material';
const SectionRoom = () => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  const { data, isError, isLoading } = useQuery({
    queryKey: ['rooms'],
    queryFn: fetchRoomsList,
  });
  if (isLoading) return <div>is Loading</div>;
  if (isError) return <div>Error loading data</div>;
  if (!data) return null;

  return (
    <Grid
      padding={isDesktop ? '120px 0' : '40px 12px'}
      bgcolor={(theme: Theme) => `${theme.palette.hotelPrimary[10]}`}
    >
      <HomePageContainer>
        <Stack width={'100%'}>
          <Typography
            variant={isDesktop ? 'H6_20px_B' : 'Subtitle_14px_B'}
            color={(theme: Theme) => `${theme.palette.neutral[80]}`}
            mb={isDesktop ? 2 : 1}
            component={isDesktop ? 'h6' : 'p'}
          >
            房型選擇
          </Typography>
          <Typography
            variant={isDesktop ? 'H1_48px_B' : 'H3_32px_B'}
            color={(theme: Theme) => `${theme.palette.hotelPrimary[100]}`}
            mb={isDesktop ? '80px' : '40px'}
            component={isDesktop ? 'h1' : 'h3'}
          >
            各種房型，任您挑選
          </Typography>
          <Stack spacing={isDesktop ? 6 : 3}>
            {data.map((card) => (
              <RoomCard key={card._id} card={card} />
            ))}
          </Stack>
        </Stack>
      </HomePageContainer>
    </Grid>
  );
};

export default SectionRoom;
