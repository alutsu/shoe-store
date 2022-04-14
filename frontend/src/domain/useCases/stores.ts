import { Store } from '../models/store';

export type StoresParams = {
  id: string;
};

export interface Stores {
  getStores(params: StoresParams): Promise<Store[]>;
}
