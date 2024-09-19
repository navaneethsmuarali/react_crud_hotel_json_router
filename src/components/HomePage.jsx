import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get('http://localhost:2000/mobiles').then(res => {
      setColumns(Object.keys(res.data[0] || {}));
      setRecords(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:2000/mobiles/${id}`)
      .then(() => {
        setRecords(records.filter(record => record.id !== id));
      })
      .catch(err => console.error(err));
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`); 
  };

  const handleAdd = () => {
    navigate('/add');
  };

  return (
    <div className="container">
      
      <nav className="navbar">
        <button className='add-btn' onClick={handleAdd}>Add Mobile</button>
        <button onClick={() => navigate('/')}>Go to Home</button>
      </nav>

      <h1>Mobile List</h1>
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
              <td><img src={record.thumbnail} alt={record.model} width="50" /></td>
              <td>
                <button className="edit-b" onClick={() => handleEdit(record.id)}>Edit</button>
                <button className="delete-b" onClick={() => handleDelete(record.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
