import { HttpResponse } from './httpResponse';

export type HttpGetParams = {
  url: string;
  id?: string;
};

export interface HttpGetClient<R> {
  get(params: HttpGetParams): Promise<HttpResponse<R>>;
}
