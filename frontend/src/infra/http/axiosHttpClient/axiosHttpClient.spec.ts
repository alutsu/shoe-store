import axios from 'axios';
import { mockGetRequest } from '../../../data/test';
import { mockAxios } from '../../test';
import { AxiosHttpClient } from './axiosHttpClient';

jest.mock('axios');

type SutTypes = {
  sut: AxiosHttpClient;
  mockedAxios: jest.Mocked<typeof axios>;
};

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient();
  const mockedAxios = mockAxios();

  return { sut, mockedAxios };
};

describe('AxiosHttpClient', () => {
  it('should call axios with correct url and verb', async () => {
    const request = mockGetRequest();
    const { sut, mockedAxios } = makeSut();
    await sut.get(request);

    expect(mockedAxios.get).toHaveBeenCalledWith(request.url);
  });

  it('should return the correct statusCode and body', () => {
    const request = mockGetRequest();
    const { sut, mockedAxios } = makeSut();
    const promise = sut.get(request);

    expect(promise).toEqual(mockedAxios.get.mock.results[0].value);
  });
});
