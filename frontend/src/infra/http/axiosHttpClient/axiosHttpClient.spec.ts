import axios from 'axios';
import faker from '@faker-js/faker';
import { HttpGetParams } from 'data/protocols/http/httpGetClient';
import { AxiosHttpClient } from './axiosHttpClient';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedAxiosResult = {
  data: { stores: [{ id: faker.datatype.number(100).toString() }] },
  status: faker.datatype.number(),
};
mockedAxios.get.mockResolvedValue(mockedAxiosResult);

const makeSut = (): AxiosHttpClient => new AxiosHttpClient();

const mockGetRequest = (): HttpGetParams => ({
  url: faker.internet.url(),
});

describe('AxiosHttpClient', () => {
  it('should call axios with correct url and verb', async () => {
    const request = mockGetRequest();
    const sut = makeSut();
    await sut.get(request);

    expect(mockedAxios.get).toHaveBeenCalledWith(request.url);
  });

  it('should return the correct statusCode and body', async () => {
    const request = mockGetRequest();
    const sut = makeSut();
    const httpResponse = await sut.get(request);

    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data,
    });
  });
});
