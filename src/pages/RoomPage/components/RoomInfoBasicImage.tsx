import areaInfoImg from '@src/assets/images/areaInfo.png';
import bedInfoImg from '@src/assets/images/bedInfo.png';
import maxPeopleImg from '@src/assets/images/maxPeople.png';
import isProvideImg from '@src/assets/images/isProvide.png';

type imageProps = 'areaInfo' | 'bedInfo' | 'maxPeople' | 'isProvide';
const RoomInfoBasicImage = ({ type }: { type: imageProps }) => {
  switch (type) {
    case 'areaInfo':
      return <img src={areaInfoImg} alt="" />;
    case 'bedInfo':
      return <img src={bedInfoImg} alt="" />;
    case 'maxPeople':
      return <img src={maxPeopleImg} alt="" />;
    case 'isProvide':
      return <img src={isProvideImg} alt="" />;
  }
};

export default RoomInfoBasicImage;
