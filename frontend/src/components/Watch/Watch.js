import React, { useEffect, useState } from "react";
import {
  Player,
  LoadingSpinner,
  BigPlayButton,
  ControlBar,
  ClosedCaptionButton,
} from "video-react";
import { Link } from "react-router-dom";
import axios from "axios";

const Watch = ({ match }) => {
  const [video, setVideo] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/video/${id}`)
      .then((res) => setVideo(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-50 m-auto mt-3">
      {video ? (
        <Player
          playsInline
          poster={`http://localhost:8080${video.poster}`}
          src={`http://localhost:8080/api/video/data/${id}`}
        >
          <track
            src={`http://localhost:8080${video.captions}`}
            label="English"
            kind="captions"
            srcLang="en"
            default
          ></track>
          <ControlBar autoHide={false}>
            <ClosedCaptionButton order={7} />
          </ControlBar>
          <BigPlayButton position="center" />
          <LoadingSpinner />
        </Player>
      ) : (
        ""
      )}
      <Link to="/">
        <button class="btn btn-outline-secondary mt-5">Go to home page</button>
      </Link>
    </div>
  );
};

export default Watch;
