import './Tbody.css';

const Tbody = ({
  data,
}: {
  data: {
    category: string;
    name: string;
    price: number;
    stocked: boolean;
  }[];
}) => {
  return (
    <tbody className="tbody">
      {data.map(
        (
          row: {
            category: string;
            name: string;
            price: number;
            stocked: boolean;
          },
          key,
        ): any => {
          return (
            <tr key={key}>
              <td>{row.category}</td>
              <td>{row.name}</td>
              <td>{row.price.toLocaleString()}</td>
              <td>{row.stocked ? 'vorhanden' : 'nicht vorhanden'}</td>
            </tr>
          );
        },
      )}
    </tbody>
  );
};

export default Tbody;
