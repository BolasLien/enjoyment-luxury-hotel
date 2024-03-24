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
import RoomInfoBasic from '../RoomPage/components/RoomInfoBasic';
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
          <RoomInfoBasic areaInfo={'24坪'} bedInfo={'一張大床'} maxPeople={4} />
          <RoomInfo
            title={'layoutInfo'}
            infos={[
              {
                title: '市景',
                isProvide: true,
              },
              { title: '獨立衛浴', isProvide: true },
              { title: '客廳', isProvide: true },
              { title: '書房', isProvide: true },
              { title: '樓層電梯', isProvide: false },
            ]}
          />
          <RoomInfo
            title={'facilityInfo'}
            infos={[
              {
                title: '平面電視',
                isProvide: true,
              },
              {
                title: '吹風機',
                isProvide: true,
              },
              {
                title: '冰箱',
                isProvide: true,
              },
              {
                title: '熱水壺',
                isProvide: true,
              },
              {
                title: '檯燈',
                isProvide: true,
              },
              {
                title: '衣櫃',
                isProvide: true,
              },
              {
                title: '除濕機',
                isProvide: true,
              },
              {
                title: '浴缸',
                isProvide: true,
              },
              {
                title: '書桌',
                isProvide: true,
              },
              {
                title: '音響',
                isProvide: true,
              },
            ]}
          />
          <RoomInfo
            title={'amenityInfo'}
            infos={[
              {
                title: '衛生紙',
                isProvide: true,
              },
              {
                title: '拖鞋',
                isProvide: true,
              },
              {
                title: '沐浴用品',
                isProvide: true,
              },
              {
                title: '清潔用品',
                isProvide: true,
              },
              {
                title: '刮鬍刀',
                isProvide: true,
              },
              {
                title: '吊衣架',
                isProvide: true,
              },
              {
                title: '浴巾',
                isProvide: true,
              },
              {
                title: '刷牙用品',
                isProvide: true,
              },
              {
                title: '罐裝水',
                isProvide: true,
              },
              {
                title: '梳子',
                isProvide: true,
              },
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
