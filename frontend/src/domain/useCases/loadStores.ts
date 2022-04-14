import { Store } from '@/domain/models/store';

export type StoresParams = {
  id?: string;
};

export interface LoadStores {
  getStores(params: StoresParams): Promise<Store[]>;
}
