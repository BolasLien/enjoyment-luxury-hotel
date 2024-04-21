import UiSwiper from '@src/ui-components/UiSwiper';
import { Grid, Stack, useTheme, useMediaQuery } from '@mui/material';
import { Rooms } from '@src/apis/home';
import RoomCardDescription from './RoomCardDescription';
import { v4 as uuidv4 } from 'uuid';

const getRoomList = (card: Rooms) => {
  const { imageUrl, imageUrlList } = card;
  return [imageUrl, ...imageUrlList].map((url) => ({
    src: url,
    name: uuidv4(),
  }));
};

const RoomCard = ({ card }: { card: Rooms }) => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  const roomList = getRoomList(card);
  return (
    <Stack
      width={'100% '}
      height={isDesktop ? '458px' : 'auto'}
      direction={isDesktop ? 'row' : 'column'}
      justifyContent={isDesktop ? 'center' : 'flex-start'}
      alignItems="center"
      borderRadius={'20px'}
      overflow={'hidden'}
    >
      <Grid display={'flex'} width={'calc(1200px - 524px)'} height={isDesktop ? '100%' : '200px'}>
        <UiSwiper navigation items={roomList} />
      </Grid>
      <RoomCardDescription card={card} />
    </Stack>
  );
};

export default RoomCard;
