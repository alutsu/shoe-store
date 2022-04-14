import axios from 'axios';
import faker from '@faker-js/faker';
import { AxiosHttpClient } from './axiosHttpClient';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('AxiosHttpClient', () => {
  it('should call axios with correct url', async () => {
    const url = faker.internet.url();
    const sut = new AxiosHttpClient();
    await sut.get({ url });

    expect(mockedAxios.get).toHaveBeenCalledWith(url);
  });
});
