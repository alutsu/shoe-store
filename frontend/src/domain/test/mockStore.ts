import faker from '@faker-js/faker';
import { StoresParams } from 'domain/useCases/stores';

export const mockStore = (): StoresParams => ({
  id: faker.datatype.number(100).toString(),
});
