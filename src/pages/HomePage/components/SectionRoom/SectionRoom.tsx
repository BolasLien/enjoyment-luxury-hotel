import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Stack, Box } from '@mui/material';
import { fetchRoomsList, Rooms } from '@src/apis/home';
import HomePageContainer from '@src/common/HomePageContainer';
import UiSwiper from '@src/ui-components/UiSwiper';
import RoomsBg from '@src/assets/images/rooms-bg.png';
import ButtonPrev from '@src/assets/images/Button-prev.svg';
import ButtonNext from '@src/assets/images/Button-next.svg';
import Dot from '@src/assets/images/dot.png';
import SectionRoomInfo from './components/SectionRoomInfo';
import SectionRoomSkeleton from './components/SectionRoomSkeleton';
import { v4 as uuidv4 } from 'uuid';

const initIndex = 0;
const getListObj = (url: string) => {
  return {
    src: url,
    name: uuidv4(),
  };
};

const SectionRoom = () => {
  const [index, setIndex] = useState<number>(initIndex);
  const { data, isError, isLoading } = useQuery({
    queryKey: ['rooms'],
    queryFn: fetchRoomsList,
  });
  if (isLoading) return <SectionRoomSkeleton />;
  if (isError) return <div>Error loading data</div>;
  if (!data) return null;

  const roomList = (data: Rooms) => {
    const { imageUrl, imageUrlList } = data;
    return [imageUrl, ...imageUrlList].map((url) => getListObj(url));
  };

  const maxLength: number = data ? data.length - 1 : 0;
  const handlePrev = () => {
    const newIndex = (index - 1 + (maxLength + 1)) % (maxLength + 1);
    setIndex(newIndex);
  };
  const handleNext = () => {
    const newIndex = (index + 1) % (maxLength + 1);
    setIndex(newIndex);
  };

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
          <UiSwiper
            items={roomList(data[index])}
            customStyle={{
              '.swiper': {
                width: '100%',
                height: '100%',
                borderRadius: '8px',
              },
            }}
          />
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
          <SectionRoomInfo {...data[index]} />
          <Box alignSelf={'flex-end'}>
            <img src={ButtonPrev} alt="prev" onClick={handlePrev} />
            <img src={ButtonNext} alt="next" onClick={handleNext} />
          </Box>
        </Stack>
      </HomePageContainer>
      <Box
        width={200}
        height={200}
        sx={{
          position: 'absolute',
          right: '80px',
          bottom: '-160px',
          display: { md: 'block', xs: 'none' },
        }}
      >
        <img src={Dot} alt="dot" width={'100%'} height={'100%'} />
      </Box>
    </Stack>
  );
};
export default SectionRoom;
