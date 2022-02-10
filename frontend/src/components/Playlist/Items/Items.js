import React from "react";
import { Link } from "react-router-dom";

const Items = ({ item }) => {
  const poster = "http://localhost:8080/" + item.poster;
  return (
    <div className="card w-25 h-25">
      <Link to={`/watch/${item.id}`}>
        <img src={poster} className="card-img-top" alt={item.name} />
      </Link>

      <div className="card-body" style={{ height: "200px" }}>
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.synopsis}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Upload Date: {item.uploadDate}</small>
        <br />
        <small className="text-muted">
          <Link to={`/watch/${item.id}`}>
            <button className="btn btn-success btn-sm mt-2">Watch</button>
          </Link>
        </small>
      </div>
    </div>
  );
};

export default Items;
