import { Typography } from '@mui/material';
import DistrictSelector from '@src/common/DistrictSelector';
import DateSelector from '@src/common/DateSelector';

const SelectorComponents = () => {
  const handleDistrictChange = (value: { city: string; distinct: string; zipCode: string }) => {
    console.log(value);
  };
  const handleDateChange = (value: { year: number; month: number; date: number }) => {
    console.log(value);
  };
  return (
    <>
      <Typography variant="body1">District Selector</Typography>
      <DistrictSelector onChange={handleDistrictChange} />
      <Typography variant="body1">Date Selector</Typography>
      <DateSelector onChange={handleDateChange} />
    </>
  );
};

export default SelectorComponents;
