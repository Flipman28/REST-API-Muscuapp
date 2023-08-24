const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// GetEquipements
router.get("/", controller.getEquipements);
// Ajouter un equipement
router.post("/", controller.addEquipement);
// GetEquipementById
router.get("/:id", controller.getEquipementById);
// Modifier un equipement
router.put("/:id", controller.updateEquipement);
// Supprimer l'équipement par id
router.delete("/:id", controller.removeEquipement);

module.exports = router;
