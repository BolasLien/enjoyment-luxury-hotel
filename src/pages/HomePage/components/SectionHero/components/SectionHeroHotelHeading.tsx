import { Typography, Theme, Box, useTheme, useMediaQuery } from '@mui/material';

const heroBorder = '#F5F7F9';
const transparent30 = 'rgba(255, 255, 255, 0.3)';

const customResizeDisplay_100px_B = {
  fontSize: 100,
  lineHeight: '120px',
  fontWeight: 700,
  '@media (max-width:1440px)': {
    fontSize: 80,
    lineHeight: '96px',
  },
  '@media (max-width:1280px)': {
    fontSize: 60,
    lineHeight: '72px',
  },
  '@media (max-width:900px)': {
    fontSize: 40,
    lineHeight: '48px',
  },
};

const SectionHeroHotelHeadingDesktop = () => {
  return (
    <Box
      justifyContent={'center'}
      alignItems={'center'}
      width={'100%'}
      maxWidth={'calc(50vw-180px)'}
    >
      <Box
        width={'100%'}
        minWidth={'400px'}
        height={'678px'}
        borderRadius={'80px'}
        display={'flex'}
        justifyContent={'flex-start'}
        alignItems={'center'}
        sx={{
          borderTop: `1px solid ${heroBorder}`,
          borderRight: `1px solid ${heroBorder}`,
          position: 'relative',
          '::before': {
            content: '""',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 1,
            backdropFilter: 'blur(10px)',
            borderRadius: '80px',
            zIndex: -1,
            background: (theme: Theme) =>
              `linear-gradient(180deg, ${theme.palette.neutral['transparent']}, ${transparent30})`,
          },
        }}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'flex-start'}
          sx={{ transform: 'translateX(-48px)' }}
        >
          <Typography
            mb={1}
            sx={{
              ...customResizeDisplay_100px_B,
              color: (theme: Theme) => `${theme.palette.neutral[0]}`,
            }}
          >
            高雄
          </Typography>
          <Typography
            mb={3}
            sx={{
              ...customResizeDisplay_100px_B,
              color: (theme: Theme) => `${theme.palette.neutral[0]}`,
            }}
          >
            豪華住宿之選
          </Typography>
          <Typography
            variant="H3_32px_B"
            mb={'60px'}
            sx={{ color: (theme: Theme) => `${theme.palette.neutral[40]}` }}
          >
            我們致力於為您提供無與倫比的奢華體驗與優質服務
          </Typography>
          <Box
            display={'flex'}
            justifyContent={'flex-end'}
            alignItems={'center'}
            width={'100%'}
            height={'116px'}
            borderRadius={'8px'}
            padding={'40px'}
            sx={{
              transition: 'all .3s',
              cursor: 'pointer',
              backgroundColor: (theme: Theme) => `${theme.palette.neutral[0]}`,
              color: (theme: Theme) => theme.palette.hotelPrimary[100],
              '&:hover': {
                backgroundColor: (theme: Theme) => theme.palette.hotelPrimary[100],
                color: (theme: Theme) => theme.palette.neutral[0],
                '> div': {
                  backgroundColor: (theme: Theme) => theme.palette.neutral[0],
                },
              },
            }}
          >
            <Typography
              variant="H5_24px_B"
              sx={{
                color: 'inherit',
              }}
            >
              立即訂房
            </Typography>
            <Box
              display={'flex'}
              width={'120px'}
              height={'1px'}
              ml={2}
              sx={{
                backgroundColor: (theme: Theme) => theme.palette.hotelPrimary[100],
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
const SectionHeroHotelHeadingMobile = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      width={'100%'}
      maxWidth={'100vw'}
      padding={'0 20px'}
      sx={{
        justifyContent: 'flex-end',
        '@media (min-width:400px)': {
          justifyContent: 'center',
        },
      }}
    >
      <Box
        width={'290px'}
        borderRadius={'40px'}
        display={'flex'}
        justifyContent={'flex-start'}
        alignItems={'center'}
        sx={{
          height: { xs: '420px', md: '678px' },
          borderTop: `1px solid ${heroBorder}`,
          borderRight: `1px solid ${heroBorder}`,
          position: 'relative',
          '::before': {
            content: '""',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 1,
            backdropFilter: 'blur(10px)',
            borderRadius: '40px',
            zIndex: -1,
            background: (theme: Theme) =>
              `linear-gradient(180deg, ${theme.palette.neutral['transparent']}, ${transparent30})`,
          },
        }}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'flex-start'}
          minWidth={'310px'}
          sx={{ transform: 'translateX(-40px)' }}
        >
          <Typography
            variant="H1_48px_B"
            mb={1}
            sx={{ color: (theme: Theme) => `${theme.palette.neutral[0]}` }}
          >
            高雄
          </Typography>
          <Typography
            variant="H1_48px_B"
            mb={3}
            sx={{ color: (theme: Theme) => `${theme.palette.neutral[0]}` }}
          >
            豪華住宿之選
          </Typography>
          <Typography
            variant="Body_16px_R"
            mb={'40px'}
            sx={{ color: (theme: Theme) => `${theme.palette.neutral[40]}` }}
          >
            我們致力於為您提供無與倫比的奢華體驗與優質服務
          </Typography>
          <Box
            display={'flex'}
            justifyContent={'flex-end'}
            alignItems={'center'}
            width={'100%'}
            height={'100%'}
            borderRadius={'8px'}
            padding={'20px'}
            sx={{
              transition: 'all .3s',
              cursor: 'pointer',
              backgroundColor: (theme: Theme) => `${theme.palette.neutral[0]}`,
              color: (theme: Theme) => theme.palette.hotelPrimary[100],
              '&:hover': {
                backgroundColor: (theme: Theme) => theme.palette.hotelPrimary[100],
                color: (theme: Theme) => theme.palette.neutral[0],
                '> span': {
                  color: (theme: Theme) => theme.palette.neutral[0],
                },
                '> div': {
                  backgroundColor: (theme: Theme) => theme.palette.neutral[0],
                },
              },
            }}
          >
            <Typography
              variant="Body_16px_R"
              sx={{
                color: (theme: Theme) => theme.palette.neutral[100],
              }}
            >
              立即訂房
            </Typography>
            <Box
              display={'flex'}
              width={'80px'}
              height={'1px'}
              ml={2}
              sx={{
                backgroundColor: (theme: Theme) => theme.palette.neutral[100],
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const SectionHeroHotelHeading = () => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return isDesktop ? <SectionHeroHotelHeadingDesktop /> : <SectionHeroHotelHeadingMobile />;
};

export default SectionHeroHotelHeading;
