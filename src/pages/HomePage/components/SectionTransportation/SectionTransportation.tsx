import { useMediaQuery, Stack, Box, Typography, useTheme, SvgIcon } from '@mui/material';
import HomePageContainer from '@src/common/HomePageContainer';
import { FaCar, FaTrain, FaCarOn } from 'react-icons/fa6';
import dLingBg from '@src/assets/images/Line.png';
import mLineBg from '@src/assets/images/Line-m.png';

const Heading = () => {
  const { palette, breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));

  return (
    <Stack direction={'row'} alignItems={'center'} gap={5}>
      <Box>
        <Typography
          variant={isDesktop ? 'H1_48px_B' : 'H3_32px_B'}
          color={palette.hotelPrimary[100]}
        >
          交通
          <br />
          方式
        </Typography>
      </Box>
      <Box
        width={{ md: '165px', xs: '194px' }}
        height={'2px'}
        sx={{ backgroundImage: 'linear-gradient(90deg, #BE9C7C 0%, #FFFFFF 100%)' }}
      />
    </Stack>
  );
};

type IntroRowProps = { icon: React.ReactNode; title: string; description: string };

const IntroRow = ({ icon, title, description }: IntroRowProps) => {
  const { palette, breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));

  return (
    <Stack>
      <SvgIcon
        sx={{
          color: palette.hotelPrimary[100],
          width: { md: 80, xs: 48 },
          height: { md: 80, xs: 48 },
        }}
      >
        {icon}
      </SvgIcon>
      <Typography
        mt={{ md: 2, xs: 1 }}
        variant={isDesktop ? 'H5_24px_B' : 'Title_16px_B'}
        color={palette.neutral[0]}
      >
        {title}
      </Typography>
      <Typography
        mt={{ md: 2, xs: 1 }}
        variant={isDesktop ? 'Body_16px_R' : 'Body2_14px_R'}
        color={palette.neutral[0]}
      >
        {description}
      </Typography>
    </Stack>
  );
};

const SectionTransportation = () => {
  const { palette, breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return (
    <>
      <HomePageContainer
        disableGutters={false}
        sx={{ minHeight: 'auto', pt: { md: 15, xs: 10 }, pb: { md: 10, xs: 5 } }}
      >
        <Heading />
        <Stack mt={10}>
          <Stack height={'400px'}>
            <Typography mb={2} variant="Title_16px_B" sx={{ color: palette.neutral[40] }}>
              台灣高雄市新興區六角路123號
            </Typography>
            <Box overflow={'hidden'} borderRadius={2}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.5399925363986!2d120.29511327523444!3d22.633646879448285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e048a08fa14c5%3A0xeb34a3011d9c3188!2zODAx6auY6ZuE5biC5YmN6YeR5Y2A5LiD6LOi5LqM6LevMTIz6Jmf!5e0!3m2!1szh-TW!2stw!4v1709860303166!5m2!1szh-TW!2stw"
                width={'100%'}
                height="360"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Stack>
          <Stack direction={{ md: 'row', xs: 'column' }} mt={5} gap={3}>
            <IntroRow
              icon={<FaCar />}
              title="自行開車"
              description="如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。"
            />
            <IntroRow
              icon={<FaTrain />}
              title="高鐵/火車"
              description="如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。"
            />
            <IntroRow
              icon={<FaCarOn />}
              title="禮賓車服務"
              description="承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567"
            />
          </Stack>
        </Stack>
      </HomePageContainer>
      <Box
        component={'img'}
        src={isDesktop ? dLingBg : mLineBg}
        width={'100%'}
        height={isDesktop ? 188 : 84}
      />
    </>
  );
};

export default SectionTransportation;
