import { HttpGetClient } from 'data/protocols/http/httpGetClient';
import { GetStores } from './getStores';

describe('GetStores', () => {
  it('should call HttpGetClient with correct URL', async () => {
    class HttpGetClientSpy implements HttpGetClient {
      url?: string;

      async get(url: string): Promise<void> {
        this.url = url;
        return Promise.resolve();
      }
    }

    const url = 'valid_url';
    const httpGetClient = new HttpGetClientSpy();
    const sut = new GetStores(url, httpGetClient);
    await sut.index();
    expect(httpGetClient.url).toBe(url);
  });
});

export {};
