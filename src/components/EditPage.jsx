import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    model: '',
    brand: '',
    price: '',
    rating: '',
    stock: '',
    description: '',
    thumbnail: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:2000/mobiles/${id}`).then(res => {
      setFormData(res.data);
    });
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:2000/mobiles/${id}`, formData)
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:2000/mobiles/${id}`)
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
       <div className="navbar">
        <button onClick={() => navigate('/')}>Go to Home</button>
      </div>
      <h1>Edit Mobile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Model:
          <input type="text" name="model" value={formData.model} onChange={handleChange} />
        </label>
        <label>
          Brand:
          <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
        </label>
        <label>
          Rating:
          <input type="number" name="rating" step="0.1" value={formData.rating} onChange={handleChange} />
        </label>
        <label>
          Stock:
          <input type="number" name="stock" value={formData.stock} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        </label>
        <label>
          Thumbnail URL:
          <input type="text" name="thumbnail" value={formData.thumbnail} onChange={handleChange} />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={handleDelete} style={{ marginLeft: '10px', backgroundColor: 'red' }}>Delete</button>
      </form>
    </div>
  );
}

export default EditPage;
