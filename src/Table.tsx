import './Table.css';

import data from './api-result.json';
import Thead from './Thead';
import Tbody from './Tbody';
import Tfoot from './Tfoot';
import { useState } from 'react';

type DataRow = {
  category: string;
  name: string;
  price: number;
  stocked: boolean;
};

const Table = () => {
  const [filteredSortedData, setFilteredSortedData] = useState(data);

  const SORT_DIRECTION = { UP: 'up', DOWN: 'down' } as const;

  const sortUpDown = (
    key: 'category' | 'name' | 'price' | 'stocked',
    direction: string,
  ) => {
    setFilteredSortedData(
      [...filteredSortedData].sort((a: DataRow, b: DataRow) => {
        const valueA = String(a[key]).toUpperCase();
        const valueB = String(b[key]).toUpperCase();

        // returning different values depending on the sort direction
        if (valueA < valueB) {
          return direction === SORT_DIRECTION.UP ? -1 : 1;
        } else if (valueA > valueB) {
          return direction === SORT_DIRECTION.DOWN ? 1 : -1;
        }
        return 0;
      }),
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
