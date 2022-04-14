import { HttpGetParams } from 'data/protocols/http/httpGetClient';
import axios from 'axios';

export class AxiosHttpClient {
  async get(params: HttpGetParams): Promise<void> {
    await axios.get(params.url);
  }
}
