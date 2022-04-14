import { HttpGetClient } from 'data/protocols/http/httpGetClient';

export class GetStores {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient,
  ) {}

  async index(): Promise<void> {
    await this.httpGetClient.get({ url: this.url });
  }
}
