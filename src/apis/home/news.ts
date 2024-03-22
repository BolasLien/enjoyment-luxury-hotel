import axios from '../axios';

// GET /api/v1/home/news/
// {
//   "status": true,
//   "result": [
//     {
//       "_id": "6523e9f23a22dd8d8207ef7c",
//       "title": "秋季旅遊，豪華享受方案",
//       "description": "秋天就是要來場豪華的旅遊...",
//       "image": "https://fakeimg.pl/300/",
//       "createdAt": "2023-10-09T11:54:26.586Z",
//       "updatedAt": "2023-10-09T11:54:26.586Z"
//     }
//   ]
// }

export type News = {
  _id?: string;
  title: string;
  description: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
};

type fetchNewsListResponse = News[];
type fetchNewsByIdResponse = News;

export const fetchNewsList = async (): Promise<fetchNewsListResponse> => {
  const response = await axios.get('/api/v1/home/news/');
  return response.data.result;
};
export const fetchNewsById = async (id: string): Promise<fetchNewsByIdResponse> => {
  const response = await axios.get(`/api/v1/home/news/${id}`);
  return response.data;
};
