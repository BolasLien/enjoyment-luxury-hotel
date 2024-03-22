import { useTheme, Skeleton, useMediaQuery } from '@mui/material';

const SectionRoomInfoSkeleton = () => {
  const { palette } = useTheme();
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return (
    <>
      <Skeleton
        variant="text"
        sx={{
          width: '100%',
          fontSize: isDesktop ? '40px' : '28px',
          color: palette.neutral[0],
          bgcolor: 'grey.900',
          mb: 2,
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          width: '100%',
          fontSize: isDesktop ? '16px' : '14px',
          color: palette.neutral[0],
          bgcolor: 'grey.900',
          mb: isDesktop ? 5 : 3,
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          width: '100%',
          fontSize: isDesktop ? '32px' : '16px',
          color: palette.neutral[0],
          bgcolor: 'grey.900',
          mb: isDesktop ? 5 : 3,
        }}
      />
      <Skeleton
        variant="rounded"
        sx={{
          width: '100%',
          maxWidth: isDesktop ? '628px' : '351px',
          height: isDesktop ? '116px' : '64px',
          borderRadius: '8px',
          bgcolor: 'grey.900',
          mb: isDesktop ? 5 : 3,
        }}
      />
    </>
  );
};

export default SectionRoomInfoSkeleton;
