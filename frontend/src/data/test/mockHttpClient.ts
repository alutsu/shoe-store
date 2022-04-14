import {
  HttpGetClient,
  HttpGetParams,
} from '@/data/protocols/http/httpGetClient';

export class HttpGetClientSpy implements HttpGetClient<any> {
  url?: string;
  id?: string;

  async get(params: HttpGetParams): Promise<any> {
    this.url = params.url;
    this.id = params.id;
    return Promise.resolve();
  }
}
