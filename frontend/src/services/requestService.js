import http from "./httpService";

const getAllVideos = () => {
  return http.get("/videos");
};

export { getAllVideos };
