import Navbar from '@src/common/Navbar';
import SectionNews from './components/SectionNews';
import SectionHero from './components/SectionHero';
import SectionAbout from './components/SectionAbout';
import SectionRoom from './components/SectionRoom';
import SectionTransportation from './components/SectionTransportation';
import SectionFood from './components/SectionFood';
import Footer from '@src/common/Footer';
import { useTheme } from '@mui/material';

export default function HomePage() {
  const { palette } = useTheme();
  return (
    <>
      <main style={{ backgroundColor: palette.neutral.bgcolor }}>
        <Navbar />
        <SectionHero />
        <SectionNews />
        <SectionAbout />
        <SectionRoom />
        <SectionFood />
        <SectionTransportation />
      </main>
      <Footer />
    </>
  );
}
