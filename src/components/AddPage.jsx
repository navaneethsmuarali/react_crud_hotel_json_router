import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddPage() {
  const navigate = useNavigate();
  
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    
    const newMobile = {
      model,
      brand,
      price,
      rating,
      stock,
      description,
      thumbnail
    };

    axios.post('http://localhost:2000/mobiles', newMobile)
      .then(() => navigate('/'))
      .catch(err => console.error('Error adding mobile:', err));
  };

  return (
    <div className='add_pag'>
      
      <div className="navbar">
        <button onClick={() => navigate('/')}>Go to Home</button>
      </div>
      
      <h1>Add New Mobile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Model:
          <input type="text" value={model} onChange={e => setModel(e.target.value)} />
        </label>
        <br />
        <label>
          Brand:
          <input type="text" value={brand} onChange={e => setBrand(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
        </label>
        <br />
        <label>
          Rating:
          <input type="number" step="0.1" value={rating} onChange={e => setRating(e.target.value)} />
        </label>
        <br />
        <label>
          Stock:
          <input type="number" value={stock} onChange={e => setStock(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
        </label>
        <br />
        <label>
          Thumbnail URL:
          <input type="text" value={thumbnail} onChange={e => setThumbnail(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddPage;
