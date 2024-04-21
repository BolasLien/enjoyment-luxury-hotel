import { Container, Grid, Typography, Theme, useTheme, useMediaQuery } from '@mui/material';
import UiSwiper from '@src/ui-components/UiSwiper';
import SectionHeroTitle from './components/SectionHeroTitle';
import Hero01 from '@src/assets/images/heros/hero_01.jpg';
import Hero02 from '@src/assets/images/heros/hero_02.jpg';
import Hero03 from '@src/assets/images/heros/hero_03.jpg';
import Hero04 from '@src/assets/images/heros/hero_04.jpg';
import Hero05 from '@src/assets/images/heros/hero_05.jpg';

interface IHerosList {
  src: string;
  name: string;
}
const herosList: IHerosList[] = [
  {
    src: Hero01,
    name: 'hero_01',
  },
  {
    src: Hero02,
    name: 'hero_02',
  },
  {
    src: Hero03,
    name: 'hero_03',
  },
  {
    src: Hero04,
    name: 'hero_04',
  },
  {
    src: Hero05,
    name: 'hero_05',
  },
];

const SectionHero = () => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return (
    <Container maxWidth={false} disableGutters>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid width={'100vw'} height={'100vh'} maxHeight={'486px'} display="flex">
          <UiSwiper items={herosList} mask={true} />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          position="absolute"
          display="flex"
          zIndex={1}
          maxWidth={'780px'}
          gap={{ xs: '40px', md: '80px' }}
          sx={{
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            padding: { xs: '0', md: '0' },
            top: { xs: '72px', md: 'unset' },
          }}
        >
          <SectionHeroTitle />
          <Typography
            variant={isDesktop ? 'H1_48px_B' : 'H3_32px_B'}
            sx={{
              width: isDesktop ? '200px' : '100%',
              textAlign: 'center',
              color: (theme: Theme) => `${theme.palette.neutral[0]}`,
            }}
            component={'h1'}
          >
            客房旅宿
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionHero;
