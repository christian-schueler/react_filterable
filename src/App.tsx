import './App.css';
import Table from './Table';

const App = () => {
  return (
    <div className="content">
      <h1>Table</h1>
      <p>Table component with sorting and filtering features.</p>
      <div className="table-container">
        <Table />
      </div>
    </div>
  );
};

export default App;
