import React, { useEffect, useState } from "react";
import Items from "./Items/Items";
import axios from "axios";

const Playlist = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/videos")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-around mt-3">
      {items ? (
        items.map((item) => {
          return <Items item={item} key={item.id}></Items>;
        })
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

export default Playlist;
