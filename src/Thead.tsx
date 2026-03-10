import './Thead.css';

const Thead = ({ data, onSort }: { data: any[]; onSort: any }) => {
  const dataColumns = Object.keys(data[0] || {});

  const onClick = (e: unknown) => {
    const event = e as Event;
    event.preventDefault();
    event.stopPropagation();

    const currentTarget = event.target as unknown as HTMLElement;

    const key = currentTarget.dataset.key;
    const direction = currentTarget.dataset.sortdirection;

    onSort(key, direction);
  };

  return (
    <thead className="thead">
      <tr>
        {dataColumns.map((column) => (
          <th key={column}>
            {column}&nbsp;
            <span onClick={onClick} data-key={column} data-sortdirection="up">
              up
            </span>
            &nbsp;
            <span onClick={onClick} data-key={column} data-sortdirection="down">
              down
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
