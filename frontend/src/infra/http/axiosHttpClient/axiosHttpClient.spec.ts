import axios from 'axios';
import faker from '@faker-js/faker';
import { HttpGetParams } from 'data/protocols/http/httpGetClient';
import { AxiosHttpClient } from './axiosHttpClient';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = (): AxiosHttpClient => new AxiosHttpClient();

const mockGetRequest = (): HttpGetParams => ({
  url: faker.internet.url(),
  id: faker.datatype.number(100).toString(),
});

describe('AxiosHttpClient', () => {
  it('should call axios with correct url and verb', async () => {
    const request = mockGetRequest();
    const sut = makeSut();
    await sut.get(request);

    expect(mockedAxios.get).toHaveBeenCalledWith(request.url);
  });
});
