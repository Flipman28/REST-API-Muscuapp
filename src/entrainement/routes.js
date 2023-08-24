const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// GetEntrainements
router.get("/", controller.getEntrainements);
// Ajouter un entrainement
router.post("/", controller.addEntrainement);
// GetEntrainementById
router.get("/:id", controller.getEntrainementById);
// Modifier un entrainement
router.put("/:id", controller.updateEntrainement);
// Supprimer l'entrainement par id
router.delete("/:id", controller.removeEntrainement);

module.exports = router;
