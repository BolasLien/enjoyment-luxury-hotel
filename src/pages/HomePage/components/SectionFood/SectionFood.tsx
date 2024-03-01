import HomePageContainer from '@src/common/HomePageContainer';
import { Box, Grid, Stack, Typography, useTheme } from '@mui/material';
import { useRef } from 'react';
import Food01 from '@src/assets/images/foods/food_01.png';
import Food02 from '@src/assets/images/foods/food_02.png';
import Food03 from '@src/assets/images/foods/food_03.png';
import Food04 from '@src/assets/images/foods/food_04.png';
import Food05 from '@src/assets/images/foods/food_05.png';
import Title from '@src/assets/images/foods/title.png';
import DecoLine from '@src/assets/images/Line-v.png';

interface IFoodsList {
  src: string;
  name: string;
  title: string;
  offerTime: string;
  description: string;
}
const foodsList: IFoodsList[] = [
  {
    src: Food01,
    name: 'food_01',
    title: '海霸',
    offerTime: '11:00 - 20:30',
    description:
      '以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。',
  },
  {
    src: Food02,
    name: 'food_02',
    title: '日食',
    offerTime: '17:00 - 22:00',
    description:
      '為您提供優質的牛排，每一塊肉都來自頂級的牛肉，經過專業廚師的巧手烹調，口感豐滿、風味絕佳。搭配我們的特製醬料，讓您的味蕾享受一場美味的盛宴。',
  },
  {
    src: Food03,
    name: 'food_03',
    title: '山臻',
    offerTime: '11:30 - 20:30',
    description:
      '帶您進入一次辣味與鮮香兼具的川菜美食之旅。我們的廚師掌握正宗的川菜烹調技巧，從麻辣鍋到口水雞，每一道菜都有其獨特的風味，讓您回味無窮。',
  },
  {
    src: Food04,
    name: 'food_04',
    title: '月永',
    offerTime: '11:00 - 20:00',
    description:
      '從鮮美的海鮮、經典的牛排，到各國的特色美食，我們都一應俱全。在這裡，您可以品嚐到世界各地的美食，每一道菜都由專業廚師用心製作，讓您在享受美食的同時，也能感受到我們的熱情與用心。',
  },
  {
    src: Food05,
    name: 'food_05',
    title: '天潮',
    offerTime: '14:00 - 19:30',
    description:
      '我們提供各種精緻甜點與糕點，無論您喜歡的是巧克力蛋糕、法式馬卡龍，還是台灣傳統的糕點，都能在這裡找到。讓我們的甜點帶您進入一場繽紛的甜蜜旅程。',
  },
];

const SectionFood = () => {
  const { palette } = useTheme();
  const foodIntroRef = useRef<HTMLDivElement>(null);

  const handleWheel = (event: WheelEvent) => {
    if (foodIntroRef.current) {
      const direction = event.deltaY > 0 ? 'down' : 'up';
      const isAtTop = foodIntroRef.current?.scrollLeft === 0;
      const isAtBottom =
        foodIntroRef.current.scrollLeft + foodIntroRef.current.clientWidth >=
        foodIntroRef.current.scrollWidth;

      // 條件符合時進行水平滾動
      if (
        foodIntroRef.current?.contains(event.target as Node) &&
        ((direction === 'up' && !isAtTop) || (direction === 'down' && !isAtBottom))
      ) {
        // 禁止垂直滾動
        event.preventDefault();

        const scrollAmount = 500; // 滚动的距离
        const currentScrollLeft = foodIntroRef.current.scrollLeft;
        const newScrollLeft = currentScrollLeft + scrollAmount * (direction === 'down' ? 1 : -1);

        foodIntroRef.current.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth',
        });
      }
    }
  };

  window.addEventListener('wheel', handleWheel, { passive: false });

  return (
    <Grid bgcolor={palette.hotelPrimary[10]}>
      <HomePageContainer
        sx={{
          display: 'flex',
          p: { xs: '80px 12px', md: '120px 12px' },
          flexDirection: { xs: 'column', md: 'row' },
          minHeight: 'auto',
          position: 'relative',
        }}
      >
        <Box position={'absolute'} left={'-230px'} width={'187px'} height={'1068px'}>
          <img src={DecoLine} alt="deco" width="100%" height="100%" />
        </Box>
        <Box width="100%">
          <Box>
            <Box
              sx={{ minWidth: '300px', width: '10%', display: 'block', height: 'auto' }}
              marginBottom={4}
              component="img"
              src={Title}
              alt="title"
            />
          </Box>
          <Stack
            className="food-intro"
            ref={foodIntroRef}
            direction="row"
            width="100%"
            gap={2}
            sx={{
              overflowX: 'auto',
              '&::-webkit-scrollbar': {
                width: 0,
                height: 0,
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'transparent',
              },
            }}
          >
            {foodsList.map((foodInfo) => (
              <Box
                key={foodInfo.name}
                sx={{
                  width: '100%',
                  minWidth: '420px',
                  position: 'relative',
                }}
              >
                <Box
                  width="100%"
                  component="img"
                  borderRadius="10px"
                  src={foodInfo.src}
                  alt={foodInfo.name}
                />
                <Box
                  px={4}
                  py={3}
                  sx={{
                    width: '100%',
                    position: 'absolute',
                    boxSizing: 'border-box',
                    bottom: '0px',
                    color: '#ffffff',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))',
                    backdropFilter: 'blur(10px)',
                    borderBottomLeftRadius: '10px',
                    borderBottomRightRadius: '10px',
                  }}
                >
                  <Box display="flex" alignItems="center" marginBottom={3}>
                    <Typography fontWeight="bold" marginRight="auto" fontSize="1.5rem">
                      {foodInfo.title}
                    </Typography>
                    <Typography marginRight={2}>SUN-MON</Typography>
                    <Typography>{foodInfo.offerTime}</Typography>
                  </Box>
                  <Typography>{foodInfo.description}</Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </HomePageContainer>
    </Grid>
  );
};

export default SectionFood;
