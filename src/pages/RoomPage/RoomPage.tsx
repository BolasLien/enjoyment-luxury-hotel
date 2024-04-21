import Navbar from '@src/common/Navbar';
import SectionHero from './components/SectionHero';
import SectionRoom from './components/SectionRoom';
import Footer from '@src/common/Footer';
import { useTheme } from '@mui/material';

const RoomPage = () => {
  const { palette } = useTheme();
  return (
    <>
      <main style={{ backgroundColor: palette.neutral.bgcolor }}>
        <Navbar />
        <SectionHero />
        <SectionRoom />
      </main>
      <Footer />
    </>
  );
};

export default RoomPage;
