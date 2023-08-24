const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// GetExercice
router.get("/", controller.getExercices);
// Ajouter un exercice
router.post("/", controller.addExercice);
// GetExerciceById
router.get("/:id", controller.getExerciceById);
// Modifier un exercice
router.put("/:id", controller.updateExercice);
// Supprimer l'exercice par id
router.delete("/:id", controller.removeExercice);

module.exports = router;
