import { Link as RouterLink } from 'react-router-dom';
import {
  Stack,
  Grid,
  Box,
  Typography,
  Theme,
  useTheme,
  useMediaQuery,
  SvgIcon,
  Link,
} from '@mui/material';
import { IoMdArrowForward } from 'react-icons/io';
import { Rooms } from '@src/apis/home';
import RoomProfile from '../../RoomProfile';

const RoomCardDescription = ({ card }: { card: Rooms }) => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return (
    <Stack
      height={'100%'}
      flex={isDesktop ? '1 0 524px' : '1 0 auto'}
      width={isDesktop ? 'auto' : '100%'}
      p={isDesktop ? 5 : '12px'}
      bgcolor={(theme: Theme) => `${theme.palette.neutral[0]}`}
    >
      <Typography
        variant={isDesktop ? 'H2_40px_B' : 'H4_28px_B'}
        color={(theme: Theme) => `${theme.palette.neutral[100]}`}
        mb={1}
        component={isDesktop ? 'h2' : 'h4'}
      >
        {card.name}
      </Typography>
      <Typography
        variant={isDesktop ? 'Body_16px_R' : 'Body2_14px_R'}
        color={(theme: Theme) => `${theme.palette.neutral[100]}`}
        mb={isDesktop ? 5 : 3}
        component={'p'}
      >
        {card.description}
      </Typography>
      <RoomProfile
        outlined
        areaInfo={card.areaInfo}
        bedInfo={card.bedInfo}
        maxPeople={card.maxPeople}
      />
      <Box
        width="100%"
        height="2px"
        borderRadius="2px"
        marginBottom={isDesktop ? 0 : 3}
        sx={{
          background: (theme: Theme) =>
            `linear-gradient(90deg, ${theme.palette.hotelPrimary[100]}, ${theme.palette.neutral[0]})`,
        }}
      />
      <Grid container height={'56px'} justifyContent={'space-between'} alignItems="center">
        <Typography
          variant={isDesktop ? 'H5_24px_B' : 'Title_16px_B'}
          color={(theme: Theme) => `${theme.palette.hotelPrimary[100]}`}
          component={isDesktop ? 'h5' : 'p'}
        >
          NT$ {card.price.toLocaleString()}
        </Typography>
        <Link component={RouterLink} to={`/rooms/${card._id}`}>
          <SvgIcon sx={{ color: (theme: Theme) => `${theme.palette.hotelPrimary[100]}` }}>
            <IoMdArrowForward size={24} />
          </SvgIcon>
        </Link>
      </Grid>
    </Stack>
  );
};
export default RoomCardDescription;
