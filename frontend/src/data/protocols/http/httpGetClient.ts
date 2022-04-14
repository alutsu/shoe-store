export type HttpGetParams = {
  url: string;
  id?: string;
};

export interface HttpGetClient {
  get(params: HttpGetParams): Promise<void>;
}
