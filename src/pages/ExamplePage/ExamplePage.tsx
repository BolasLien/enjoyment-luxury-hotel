import { Container, Divider, Stack, Typography, useTheme } from '@mui/material';
import LoadingModalComponents from './components/LoadingModalComponents';
import MuiComponents from './components/MuiComponents';
import ModalComponents from './components/ModalComponents';
import ReactQueryComponent from './components/ReactQueryComponent';
import SelectComponents from './components/SelectComponents';
import SwiperComponent from './components/SwiperComponent';
import Footer from '@src/common/Footer';
import HotelTypography from './components/HotelTypography';
import TabsComponent from './components/TabsComponent';
import ToastComponent from './components/ToastComponent';
import RoomProfile from '../RoomPage/components/RoomProfile';
import RoomInfo from '../RoomPage/components/RoomInfo';

const ExamplePage = () => {
  const { palette } = useTheme();

  return (
    <Stack bgcolor={palette.hotelPrimary[10]}>
      <Container maxWidth="lg">
        <Stack gap={2}>
          <Typography variant="body1">這裡是範例</Typography>

          <Divider textAlign="center">Hotel Typography</Divider>
          <HotelTypography />

          <Divider textAlign="center">Mui component</Divider>
          <MuiComponents />

          <Divider textAlign="center">React Query</Divider>
          <ReactQueryComponent />

          <Divider textAlign="center">Swiper</Divider>
          <SwiperComponent />

          <Divider textAlign="center">Modal</Divider>
          <ModalComponents />

          <Divider textAlign="center">Select</Divider>
          <SelectComponents />

          <Divider textAlign="center">Toast</Divider>
          <ToastComponent />

          <Divider textAlign="center">Loading Modal</Divider>
          <LoadingModalComponents />

          <Divider textAlign="center">Tabs</Divider>
          <TabsComponent />

          <Divider textAlign="center">RoomInfo</Divider>
          <RoomProfile outlined areaInfo={'24坪'} bedInfo={'一張大床'} maxPeople={4} />
          <RoomProfile areaInfo={'24坪'} bedInfo={'一張大床'} maxPeople={4} />
          <RoomInfo title={'layoutInfo'} infos={['市景', '獨立衛浴', '客廳', '書房', '樓層電梯']} />
          <RoomInfo
            title={'facilityInfo'}
            infos={[
              '平面電視',
              '吹風機',
              '冰箱',
              '熱水壺',
              '檯燈',
              '衣櫃',
              '除濕機',
              '浴缸',
              '書桌',
              '音響',
            ]}
          />
          <RoomInfo
            title={'amenityInfo'}
            infos={[
              '衛生紙',
              '拖鞋',
              '沐浴用品',
              '清潔用品',
              '刮鬍刀',
              '吊衣架',
              '浴巾',
              '刷牙用品',
              '罐裝水',
              '梳子',
            ]}
          />
        </Stack>
      </Container>
      <Divider textAlign="center">Footer</Divider>
      <Footer />
    </Stack>
  );
};

export default ExamplePage;
