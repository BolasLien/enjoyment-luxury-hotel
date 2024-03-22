import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography, Theme, Box, useTheme, useMediaQuery } from '@mui/material';

type SectionRoomInfoProps = {
  name: string;
  description: string;
  price: number;
};

const SectionRoomInfo = ({ name, description, price }: SectionRoomInfoProps) => {
  const { palette } = useTheme();
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return (
    <>
      <Typography
        variant={isDesktop ? 'H2_40px_B' : 'H4_28px_B'}
        component={isDesktop ? 'h2' : 'h4'}
        color={palette.neutral[0]}
        mb={2}
      >
        {name}
      </Typography>
      <Typography
        variant={isDesktop ? 'Body_16px_R' : 'Body2_14px_R'}
        color={palette.neutral[0]}
        mb={isDesktop ? 5 : 3}
        height={42}
      >
        {description}
      </Typography>
      <Typography
        variant={isDesktop ? 'H3_32px_B' : 'Body_16px_R'}
        color={palette.neutral[0]}
        mb={isDesktop ? 5 : 3}
      >
        NT$ {price.toLocaleString()}
      </Typography>

      <Link
        component={RouterLink}
        to={'/rooms'}
        width={'100%'}
        maxWidth={isDesktop ? '628px' : '351px'}
        underline="none"
      >
        <Box
          display={'flex'}
          justifyContent={'flex-end'}
          alignItems={'center'}
          width={'100%'}
          height={isDesktop ? '116px' : '64px'}
          borderRadius={'8px'}
          padding={'40px'}
          mb={isDesktop ? 5 : 3}
          sx={{
            transition: 'all .3s',
            cursor: 'pointer',
            backgroundColor: (theme: Theme) => `${theme.palette.neutral[0]}`,
            color: (theme: Theme) => theme.palette.neutral[100],
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
            variant={isDesktop ? 'H5_24px_B' : 'Body_16px_R'}
            sx={{
              color: 'inherit',
            }}
          >
            查看更多
          </Typography>
          <Box
            display={'flex'}
            width={isDesktop ? '150px' : '80px'}
            height={'1px'}
            ml={2}
            sx={{
              backgroundColor: (theme: Theme) => theme.palette.neutral[100],
            }}
          />
        </Box>
      </Link>
    </>
  );
};

export default SectionRoomInfo;
