import React from "react";
import { Link } from "react-router-dom";

export default function Card({ title, description, id, image }) {
  return (
    <div>
      <img src={image} alt="" />
      <Link to={`/ingredient/${id}`}>
        <h1>{title}</h1>
        <p>{description}</p>
      </Link>
    </div>
  );
}
