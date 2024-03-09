import { Box, Grid, Stack, Typography, useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { fetchCulinaryList } from '@src/apis/home/culinary';
import HomePageContainer from '@src/common/HomePageContainer';
import Title from '@src/assets/images/foods/title.png';
import DecoLine from '@src/assets/images/Line-v.png';

const CulinaryHorizonScroller = () => {
  const { data } = useQuery({
    queryKey: ['foods'],
    queryFn: fetchCulinaryList,
  });

  if (!data || !data.result) return <div>No data available</div>;

  return data.result.map((foodInfo) => (
    <Box
      key={foodInfo._id}
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
        src={foodInfo.image}
        alt={foodInfo.title}
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
          <Typography>{foodInfo.diningTime}</Typography>
        </Box>
        <Typography>{foodInfo.description}</Typography>
      </Box>
    </Box>
  ));
};

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
            <CulinaryHorizonScroller />
          </Stack>
        </Box>
      </HomePageContainer>
    </Grid>
  );
};

export default SectionFood;
