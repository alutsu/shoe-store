import { HttpGetClient } from 'data/protocols/http/httpGetClient';

export class HttpGetClientSpy implements HttpGetClient {
  url?: string;

  async get(url: string): Promise<void> {
    this.url = url;
    return Promise.resolve();
  }
}
