import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const DetailView = () => {
  const { id } = useParams();
  const [description, setDescription] = useState([]);

  const getDescription = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/todo/description/${id}`
    );
    setDescription(data);
  };

  useEffect(() => {
    getDescription();
  }, []);

  return (
    <div className="detail_view">
      <div className="container">
        <h1>{description.title}</h1>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="go_back">Retour à la Todo</div>
        </Link>
      </div>
      <div className="todo">
        <p>{description.description}</p>
      </div>
    </div>
  );
};

export default DetailView;
