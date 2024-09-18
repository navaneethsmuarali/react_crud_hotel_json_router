import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2000/mobiles').then(res => {
      setColumns(Object.keys(res.data[0] || {}));
      setRecords(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:2000/mobiles/${id}`).then(() => {
      setRecords(records.filter(record => record.id !== id));
    });
  };

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, i) => (
              <tr key={i}>
                <td>{record.id}</td>
                <td>{record.model}</td>
                <td>{record.brand}</td>
                <td>{record.price}</td>
                <td>{record.rating}</td>
                <td>{record.stock}</td>
                <td>{record.description}</td>
                <td>
                  <img src={record.thumbnail} alt={record.model} width="50" />
                </td>
                <td>
                  <Link to={`/update/${record.id}`}>
                    <button>Update</button>
                  </Link>
                  <button onClick={() => handleDelete(record.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
