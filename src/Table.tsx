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
        let valueA: string | number | boolean = '';
        let valueB: string | number | boolean = '';

        switch (typeof a[key]) {
          case 'string':
            valueA = String(a[key]).toUpperCase();
            break;
          case 'number':
            valueA = Number(a[key]);
            break;
          case 'boolean':
            valueA = Boolean(a[key]);
            break;
        }

        switch (typeof b[key]) {
          case 'string':
            valueB = String(b[key]).toUpperCase();
            break;
          case 'number':
            valueB = Number(b[key]);
            break;
          case 'boolean':
            valueB = Boolean(b[key]);
            break;
        }

        // returning different values depending on the sort direction
        switch (direction) {
          case SORT_DIRECTION.UP:
            return valueA < valueB ? -1 : 1;
          case SORT_DIRECTION.DOWN:
            return valueA > valueB ? -1 : 1;
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
