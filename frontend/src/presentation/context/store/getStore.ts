import { createContext } from 'react';
import { Store } from '@/domain/models/store';
import { StoresParams } from '@/domain/useCases/loadStores';

type Props = {
  stores?: Store[];
  getStores?: (params: StoresParams) => Promise<Store[]>;
};

export default createContext<Props>(null);
