import { Stack, Grid, Box, useTheme, useMediaQuery, Skeleton } from '@mui/material';

const SectionNewsCardSkeletonDesktop = () => {
  return (
    <Stack display={'flex'} direction={'row'} spacing={3} alignItems={'center'}>
      <Box
        width="100%"
        maxWidth="474px"
        height="294px"
        maxHeight={'294px'}
        borderRadius={2}
        overflow={'hidden'}
        flex={'1 0 474px'}
        display={'flex'}
        alignItems={'center'}
      >
        <Skeleton variant="rounded" width={474} height={294} />
      </Box>
      <Grid
        container
        direction={'column'}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
        flex={'1 1 auto'}
      >
        <Stack width={368}>
          <Skeleton variant="text" sx={{ fontSize: '32px' }} />
        </Stack>
        <Stack width={578}>
          <Skeleton variant="text" sx={{ fontSize: '16px' }} />
        </Stack>
      </Grid>
    </Stack>
  );
};

const SectionNewsCardSkeletonMobile = () => {
  return (
    <Stack display={'flex'} direction={'column'} spacing={3} alignItems={'center'}>
      <Box
        width="100%"
        maxWidth="351px"
        height="294px"
        maxHeight={'294px'}
        borderRadius={2}
        overflow={'hidden'}
        flex={'1 0 294px'}
        display={'flex'}
        alignItems={'center'}
      >
        <Skeleton variant="rounded" width={351} height={294} />
      </Box>
      <Grid
        container
        direction={'column'}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
        flex={'1 1 auto'}
      >
        <Stack width={351}>
          <Skeleton variant="text" sx={{ fontSize: '28px' }} />
        </Stack>
        <Stack width={351}>
          <Skeleton variant="text" sx={{ fontSize: '14px' }} />
        </Stack>
      </Grid>
    </Stack>
  );
};

const SectionNewsCardSkeleton = () => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return isDesktop ? <SectionNewsCardSkeletonDesktop /> : <SectionNewsCardSkeletonMobile />;
};

export default SectionNewsCardSkeleton;
