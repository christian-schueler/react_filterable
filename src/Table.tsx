import './Table.css';

import data from './api-result.json';
import Thead from './Thead';
import Tbody from './Tbody';
import Tfoot from './Tfoot';

const Table = () => {
  const filteredSortedData = data;

  const sortUpDown = (key: string, direction: string) => {
    console.log(key, direction);
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
