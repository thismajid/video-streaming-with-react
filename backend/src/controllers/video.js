import fs from "fs";
import path from "path";
import _ from "lodash";

import videosDB from "../database/db";

const findVideo = (id) => {
  return videosDB.filter((obj) => {
    if (obj.id === id) {
      return obj;
    }
  });
};

class videoController {
  static async getAllVideos(req, res, next) {
    try {
      const videos = [];
      let newObj;
      for (let index = 0; index < videosDB.length; index++) {
        newObj = _.omit(videosDB[index], ["video", "subtitle"]);
        videos.push(newObj);
      }
      res.json(videos);
    } catch (err) {
      throw err;
    }
  }

  static async findSingleVideo(req, res, next) {
    try {
      const { id } = req.params;
      const video = findVideo(id);
      if (!video) {
        return res.status(404).json({
          success: false,
          message: "Video not found",
        });
      }
      return res.json({
        success: true,
        message: "Video found",
        data: video[0],
      });
    } catch (err) {
      throw err;
    }
  }

  static async getVideo(req, res, next) {
    try {
      const { id } = req.params;
      const video = findVideo(id);
      const videoPath = path.join(__dirname, `../../public/${video[0].path}`);
      const videoStat = fs.statSync(videoPath);
      console.log(videoStat);
      const fileSize = videoStat.size;
      const videoRange = req.headers.range;
      if (videoRange) {
        const parts = videoRange.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = end - start + 1;
        const file = fs.createReadStream(videoPath, { start, end });
        const head = {
          "Content-Range": `bytes ${start}-${end}/${fileSize}`,
          "Accept-Ranges": "bytes",
          "Content-Length": chunksize,
          "Content-Type": "video/mp4",
        };
        res.writeHead(206, head);
        file.pipe(res);
      } else {
        const head = {
          "Content-Length": fileSize,
          "Content-Type": "video/mp4",
        };
        res.writeHead(200, head);
        fs.createReadStream(videoPath).pipe(res);
      }
    } catch (err) {
      throw err;
    }
  }
}

export default videoController;
