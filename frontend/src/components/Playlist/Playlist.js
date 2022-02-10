import { useEffect, useState } from "react";
import { getAllVideos } from "../../services/requestService";
import Items from "./Items/Items";

const Playlist = () => {
  const [items, setItems] = useState(null);

  const getVideos = async () => {
    try {
      const { data } = await getAllVideos();
      setItems(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-around mt-3">
      {items ? (
        items.map((item, index) => {
          return <Items item={item} key={item.id}></Items>;
        })
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

export default Playlist;
