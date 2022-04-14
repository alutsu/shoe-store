import { HttpGetClientSpy } from '../../test/mockHttpClient';
import { GetStores } from './getStores';

describe('GetStores', () => {
  it('should call HttpGetClient with correct URL', async () => {
    const url = 'valid_url';
    const httpGetClient = new HttpGetClientSpy();
    const sut = new GetStores(url, httpGetClient);
    await sut.index();
    expect(httpGetClient.url).toBe(url);
  });
});

export {};
