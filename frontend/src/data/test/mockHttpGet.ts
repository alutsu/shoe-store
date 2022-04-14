import faker from '@faker-js/faker';
import { HttpGetParams } from 'data/protocols/http/httpGetClient';

export const mockGetRequest = (): HttpGetParams => ({
  url: faker.internet.url(),
});
