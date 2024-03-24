import { ReactNode } from 'react';
import { Info } from '@src/apis/home';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import RoomTitle from './RoomTitle';
import RoomInfoTitle from './RoomInfoTitle';
import RoomInfoBasicImage from './RoomInfoBasicImage';

type titleProps = 'layoutInfo' | 'facilityInfo' | 'amenityInfo';
type infoProps = {
  title: titleProps;
  infos: Info[];
};

const getInfoTitle = (title: titleProps) => {
  switch (title) {
    case 'layoutInfo':
      return '房間格局';
    case 'facilityInfo':
      return '房內設備';
    case 'amenityInfo':
      return '備品提供';
  }
};

const InfoWrapper = ({ children }: { children: ReactNode }) => {
  const { palette } = useTheme();
  return (
    <Box
      width={'100%'}
      maxWidth={'746px'}
      height={'auto'}
      bgcolor={palette.neutral[0]}
      borderRadius={1}
      display={'flex'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      p={3}
    >
      <Box
        width={'auto'}
        minHeight={'24px'}
        display={'flex'}
        justifyContent={'flex-start'}
        alignItems={'flex-start'}
        flexWrap={'wrap'}
        gap={1}
      >
        {children}
      </Box>
    </Box>
  );
};

const RoomInfo = ({ title, infos }: infoProps) => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return (
    <Box display={'flex'} gap={isDesktop ? 3 : 2} flexDirection={'column'}>
      <RoomTitle title={getInfoTitle(title)} />
      <InfoWrapper>
        {infos
          .filter((info) => info.isProvide)
          .map((info) => (
            <Box gap={1} display={'flex'} justifyContent={'center'} alignItems={'center'} mr={4}>
              <RoomInfoBasicImage type={'isProvide'} />
              <Box width={'64px'}>
                <RoomInfoTitle>{info.title}</RoomInfoTitle>
              </Box>
            </Box>
          ))}
      </InfoWrapper>
    </Box>
  );
};

export default RoomInfo;
