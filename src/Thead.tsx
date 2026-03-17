import { useState } from 'react';
import './Thead.css';
import useToggle from './useToggle';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Thead = ({ data, onSort }: { data: any[]; onSort: any }) => {
  const dataColumns = Object.keys(data[0] || {});

  const [sortDirection, setSortDirection] = useState('');
  const [category, setCategory] = useState('');
  const [isUpVisible, toggleUpVisibility] = useToggle(false);
  const [isDownVisible, toggleDownVisibility] = useToggle(false);

  const onClick = (e: unknown) => {
    const event = e as Event;
    event.preventDefault();
    event.stopPropagation();

    const currentTarget = event.target as unknown as HTMLElement;

    setSortDirection(currentTarget.dataset.key ?? '');
    setCategory(currentTarget.dataset.sortdirection ?? '');

    if (sortDirection !== '') {
      switch (sortDirection) {
        case 'up':
          if (!isUpVisible) toggleUpVisibility();
          if (isDownVisible) toggleDownVisibility();
          break;
        case 'down':
          if (isUpVisible) toggleUpVisibility();
          if (!isDownVisible) toggleDownVisibility();
          break;
      }
    }

    onSort(category, sortDirection);
  };

  return (
    <thead className="thead">
      <tr>
        {dataColumns.map((column) => (
          <th key={column}>
            {column}&nbsp;
            <span
              onClick={onClick}
              data-key={column}
              data-sortdirection="up"
              className="material-symbols-outlined"
              hidden={isDownVisible && !isUpVisible}
            >
              ArrowDropUpIcon
            </span>
            &nbsp;
            <span
              onClick={onClick}
              data-key={column}
              data-sortdirection="down"
              className="material-symbols-outlined"
              hidden={!isDownVisible && isUpVisible}
            >
              ArrowDropDownIcon
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
