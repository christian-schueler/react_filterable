import './Tfoot.css';

const Tfoot = ({ data }: { data: any[] }) => {
  const dataColumnsLength = Object.keys(data[0] || {}).length;
  return (
    <tfoot className="tfoot">
      <tr>
        <td>Total</td>
        <td colSpan={dataColumnsLength - 1}>{data.length}</td>
      </tr>
    </tfoot>
  );
};

export default Tfoot;
