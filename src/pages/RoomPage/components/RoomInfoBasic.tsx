import { ReactNode } from 'react';
import { Stack, Box, Typography, useTheme } from '@mui/material';
import RoomTitle from './RoomTitle';
import RoomInfoBasicImage from './RoomInfoBasicImage';

type basicProps = {
  areaInfo: string;
  bedInfo: string;
  maxPeople: number;
};

const BasicInfoWrapper = ({ children }: { children: ReactNode }) => {
  const { palette } = useTheme();
  return (
    <Box
      width={'96px'}
      height={'96px'}
      bgcolor={palette.neutral[0]}
      borderRadius={1}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      p={2}
    >
      <Box
        width={'64px'}
        height={'64px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'flex-start'}
        flexDirection="column"
        gap={1}
      >
        {children}
      </Box>
    </Box>
  );
};

const RoomInfoBasic = ({ areaInfo, bedInfo, maxPeople }: basicProps) => {
  return (
    <>
      <RoomTitle title={'房型基本資訊'} />
      <Stack direction="row" spacing={1}>
        <BasicInfoWrapper>
          <RoomInfoBasicImage type={'areaInfo'} />
          <Typography variant="Title_16px_B">{areaInfo}</Typography>
        </BasicInfoWrapper>
        <BasicInfoWrapper>
          <RoomInfoBasicImage type={'bedInfo'} />
          <Typography variant="Title_16px_B">{bedInfo}</Typography>
        </BasicInfoWrapper>
        <BasicInfoWrapper>
          <RoomInfoBasicImage type={'maxPeople'} />
          <Typography variant="Title_16px_B">{maxPeople}</Typography>
        </BasicInfoWrapper>
      </Stack>
    </>
  );
};

export default RoomInfoBasic;
