import { Store } from '../models/store';

export interface Stores {
  getStores(): Promise<Store[]>;
}
