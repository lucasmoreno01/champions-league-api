import { Router } from "express";
import * as playersController from "./players_controller";
import * as clubsController from "./clubs_controller";

const router = Router();

router.get("/players", playersController.getPlayer)
router.get("/players/:id", playersController.getPlayerById)
router.post("/players", playersController.postPlayer);
router.delete("/players/:id", playersController.deletePlayer); 
router.patch("/players/:id", playersController.updatePlayer); 

router.get("/clubs", clubsController.getClub);

export default router;