import axios from 'axios';
import faker from '@faker-js/faker';

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  const mockedAxiosResult = {
    data: { stores: [{ id: faker.datatype.number(100).toString() }] },
    status: faker.datatype.number(),
  };
  mockedAxios.get.mockResolvedValue(mockedAxiosResult);

  return mockedAxios;
};
