import { HttpGetClientSpy } from '../../test/mockHttpClient';
import { GetStores } from './getStores';

type SutTypes = {
  sut: GetStores;
  httpGetClientSpy: HttpGetClientSpy;
};

const makeSut = (url: string = 'valid_url'): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy();
  const sut = new GetStores(url, httpGetClientSpy);
  return {
    sut,
    httpGetClientSpy,
  };
};

describe('GetStores', () => {
  it('should call HttpGetClient with correct URL', async () => {
    const url = 'other_url';
    const { sut, httpGetClientSpy } = makeSut(url);
    await sut.index();
    expect(httpGetClientSpy.url).toBe(url);
  });
});

export {};
