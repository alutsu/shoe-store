import { HttpGetClient } from 'data/protocols/http/httpGetClient';
import { StoresParams } from 'domain/useCases/stores';

export class GetStores {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient,
  ) {}

  async index(params: StoresParams): Promise<void> {
    await this.httpGetClient.get({ url: this.url, id: params.id });
  }
}
