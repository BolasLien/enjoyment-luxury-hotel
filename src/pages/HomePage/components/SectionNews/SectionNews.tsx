import { Grid, Stack, useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchNewsList } from '@src/apis/home/news';
import HomePageContainer from '@src/common/HomePageContainer';
import SectionNewsTitle from './components/SectionNewsTitle';
import SectionNewsCard from './components/SectionNewsCard';
import SectionNewsCardSkeleton from './components/SectionNewsCardSkeleton';
import DecoTop from './components/DecoTop';
import DecoBottom from './components/DecoBottom';
import { News } from '@src/apis/home/news';

const intiNews: News[] = [
  {
    _id: '0',
    image: '',
    description: '',
    title: '',
  },
  {
    _id: '1',
    image: '',
    description: '',
    title: '',
  },
  {
    _id: '2',
    image: '',
    description: '',
    title: '',
  },
];

const SectionNews = () => {
  const { palette } = useTheme();
  const { data, isError, isLoading } = useQuery({
    queryKey: ['news'],
    queryFn: fetchNewsList,
  });

  if (isLoading) {
    return (
      <Grid bgcolor={palette.hotelPrimary[10]} position={'relative'}>
        <DecoTop />
        <HomePageContainer
          sx={{
            display: 'flex',
            p: { xs: '80px 12px', md: '120px 0' },
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Stack mr={10}>
            <SectionNewsTitle />
          </Stack>
          <Stack sx={{ p: { xs: '40px 0', md: '0' } }} gap={5}>
            {intiNews.map((news) => (
              <div key={news._id}>
                <SectionNewsCardSkeleton />
              </div>
            ))}
          </Stack>
        </HomePageContainer>
        <DecoBottom />
      </Grid>
    );
  }
  if (isError) return <div>Error occurred</div>;
  if (!data) return <div>No data available</div>;

  return (
    <Grid bgcolor={palette.hotelPrimary[10]} position={'relative'}>
      <DecoTop />
      <HomePageContainer
        sx={{
          display: 'flex',
          p: { xs: '80px 12px', md: '120px 0' },
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Stack mr={10}>
          <SectionNewsTitle />
        </Stack>
        <Stack sx={{ p: { xs: '40px 0', md: '0' } }} gap={5}>
          {data.map((news) => (
            <div key={news._id}>{<SectionNewsCard news={news} />}</div>
          ))}
        </Stack>
      </HomePageContainer>
      <DecoBottom />
    </Grid>
  );
};

export default SectionNews;
