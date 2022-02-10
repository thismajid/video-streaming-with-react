import { Router } from "express";

import videoController from "../controllers/video";

const router = Router();

router.get("/videos", videoController.getAllVideos);

router.get("/video/:id", videoController.findSingleVideo);

router.get("/video/data/:id", videoController.getVideo);

export default router;
