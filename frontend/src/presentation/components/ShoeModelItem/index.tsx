import React from 'react';

export type ShoeModel = {
  id: number;
  name: string;
  total_orders: number;
  amount: number;
};

type Props = {
  shoe_model: ShoeModel;
};

const ShoeModelItem: React.FC<Props> = ({ shoe_model }: Props) => (
  <tr key={shoe_model.id}>
    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
      {shoe_model.name}
    </td>
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      {shoe_model.amount}
    </td>
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      {shoe_model.total_orders}
    </td>
  </tr>
);

export default ShoeModelItem;
