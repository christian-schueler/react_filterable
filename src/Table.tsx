import './Table.css';

import data from './api-result.json';
import Thead from './Thead';
import Tbody from './Tbody';
import Tfoot from './Tfoot';
import { useState } from 'react';

const Table = () => {
  const [filteredSortedData, setFilteredSortedData] = useState(data);

  const sortUpDown = (
    key: 'category' | 'name' | 'price' | 'stocked',
    direction: string,
  ) => {
    setFilteredSortedData(
      filteredSortedData.sort(
        (
          a: {
            category: string;
            name: string;
            price: number;
            stocked: boolean;
          },
          b: {
            category: string;
            name: string;
            price: number;
            stocked: boolean;
          },
        ) => {
          const valueA = (a[key] as string).toUpperCase();
          const valueB = (b[key] as string).toUpperCase();

          // returning different values depending on the sort direction
          if (valueA < valueB) {
            return direction === 'up' ? -1 : 1;
          } else if (valueA > valueB) {
            return direction === 'up' ? 1 : -1;
          }
          return 0;
        },
      ),
    );
  };

  return (
    <table className="table">
      <Thead data={filteredSortedData} onSort={sortUpDown} />
      <Tbody data={filteredSortedData} />
      <Tfoot data={filteredSortedData} />
    </table>
  );
};

export default Table;
