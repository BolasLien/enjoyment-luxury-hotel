import { Grid, Box, Typography, styled, BoxProps, useMediaQuery } from '@mui/material';
import RoomTitle from './RoomTitle';
import areaInfoImg from '@src/assets/images/areaInfo.svg';
import { MdBed, MdPerson } from 'react-icons/md';

type profileProps = {
  outlined?: boolean;
  areaInfo: string;
  bedInfo: string;
  maxPeople: number;
};

interface ProfileWrapperProps extends BoxProps {
  outlined: boolean;
}

const ProfileWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'outlined',
})<ProfileWrapperProps>(({ outlined, theme }) => ({
  width: '96px',
  height: '96px',
  backgroundColor: theme.palette.neutral[0],
  color: theme.palette.hotelPrimary[100],
  borderRadius: outlined ? '8px' : '1px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  border: outlined ? `1px solid ${theme.palette.hotelPrimary[40]}` : 'none',
  marginBottom: outlined ? (useMediaQuery(theme.breakpoints.up('md')) ? '40px' : '24px') : '0px',
}));

const RoomProfile = ({ outlined = false, areaInfo, bedInfo, maxPeople }: profileProps) => {
  return (
    <>
      {!outlined && <RoomTitle title={'房型基本資訊'} />}
      <Grid container gap={2}>
        <ProfileWrapper outlined={outlined}>
          <img src={areaInfoImg} alt={'areaInfo'} />
          <Typography variant="Title_16px_B">{areaInfo}</Typography>
        </ProfileWrapper>
        <ProfileWrapper outlined={outlined}>
          <MdBed size="24" />
          <Typography variant="Title_16px_B" sx={{ whiteSpace: 'nowrap' }}>
            {bedInfo}
          </Typography>
        </ProfileWrapper>
        <ProfileWrapper outlined={outlined}>
          <MdPerson size="24" />
          <Typography variant="Title_16px_B">{maxPeople}</Typography>
        </ProfileWrapper>
      </Grid>
    </>
  );
};

export default RoomProfile;
