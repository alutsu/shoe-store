import faker from '@faker-js/faker';
import { StoresParams } from '@/domain/useCases/loadStores';

export const mockStore = (): StoresParams => ({
  id: faker.datatype.number(100).toString(),
});
