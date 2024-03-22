import { Stack, Box, Skeleton } from '@mui/material';
import HomePageContainer from '@src/common/HomePageContainer';
import RoomsBg from '@src/assets/images/rooms-bg.png';
import ButtonPrev from '@src/assets/images/Button-prev.svg';
import ButtonNext from '@src/assets/images/Button-next.svg';
import SectionRoomInfoSkeleton from './SectionRoomInfoSkeleton';

const SectionRoomSkeleton = () => {
  return (
    <Stack
      height={'100vh'}
      sx={{
        p: { md: '120px 0', xs: '0 ' },
        position: 'relative',
        '::after': {
          content: '""',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${RoomsBg})`,
          position: 'absolute',
          width: '100vw',
          height: { md: '677px', xs: '132px' },
          left: 0,
          bottom: { md: 0, xs: '263px' },
          pointerEvents: 'none',
        },
      }}
    >
      <HomePageContainer
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: { md: 'row', xs: 'column' },
          alignItems: { md: 'flex-start', xs: 'center' },
        }}
      >
        <Box
          display={'flex'}
          flex={'0 0 auto'}
          sx={{
            width: { md: '50vw', xs: '100vw' },
            height: { md: 'calc(100vh - 240px)', xs: 'calc(100vh - 160px)' },
            maxHeight: { md: 900, xs: 300 },
            maxWidth: { md: 900, xs: 351 },
          }}
        >
          <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'100%'} height={'100%'} />
        </Box>
        <Stack
          justifyContent={'flex-end'}
          alignItems={'flex-start'}
          flex={'0 0 auto'}
          sx={{
            width: { md: '40vw', xs: '100vw' },
            maxHeight: { md: 900 },
            height: { md: 'calc(100vh - 240px)', xs: 'auto' },
            maxWidth: { md: '628px', xs: 351 },
            ml: { md: '80px' },
            mt: { xs: 3 },
          }}
        >
          <SectionRoomInfoSkeleton />
          <Box alignSelf={'flex-end'}>
            <img src={ButtonPrev} alt="prev" />
            <img src={ButtonNext} alt="next" />
          </Box>
        </Stack>
      </HomePageContainer>
    </Stack>
  );
};

export default SectionRoomSkeleton;
