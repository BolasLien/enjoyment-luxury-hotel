import axios from '../axios';

// GET /api/v1/home/culinary/
// {
//   "status": true,
//   "result": [
//     {
//       "_id": "653e30dafa27fbbeb053501b",
//       "title": "海霸",
//       "description": "以新鮮海產料理聞名...",
//       "diningTime": "SUN-MON 11:00-20:30",
//       "image": "https://fakeimg.pl/300/",
//       "createdAt": "2023-10-29T10:15:54.811Z",
//       "updatedAt": "2023-10-29T10:15:54.811Z"
//     }
//   ]
// }

export type Culinary = {
  _id: string;
  title: string;
  description: string;
  diningTime: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

type fetchNewsListResponse = {
  result: Culinary[];
};

export const fetchCulinaryList = async (): Promise<fetchNewsListResponse> => {
  const response = await axios.get('/api/v1/home/culinary/');

  return response.data;
};
export const fetchCulinaryById = async (id: string): Promise<Culinary> => {
  const response = await axios.get(`/api/v1/home/culinary/${id}`);

  return response.data;
};
