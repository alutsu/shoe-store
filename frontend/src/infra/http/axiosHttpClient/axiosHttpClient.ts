import axios from 'axios';
import {
  HttpGetClient,
  HttpGetParams,
} from '@/data/protocols/http/httpGetClient';
import { HttpResponse } from '@/data/protocols/http/httpResponse';

export class AxiosHttpClient implements HttpGetClient<any> {
  async get(params: HttpGetParams): Promise<HttpResponse<any>> {
    const httpResponse = await axios.get(params.url);
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }
}
