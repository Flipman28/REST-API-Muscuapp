const getExercices = "SELECT * FROM exercice";

const getExerciceById = "SELECT * FROM exercice WHERE idExercice = $1";

const checkTitreExists = "SELECT * FROM exercice WHERE titreExercice = $1";

const addExerciceWithoutEquipement =
  "INSERT INTO exercice (titreExercice, description, nombreRepElement, nombreRepRep, lienVideo) VALUES ($1, $2, $3, $4, $5)";

const addExercice =
  "INSERT INTO exercice (titreExercice, description, nombreRepElement, nombreRepRep, lienVideo, idEquipement) VALUES ($1, $2, $3, $4, $5, $6)";

const removeExercice = "DELETE FROM exercice WHERE idExercice = $1";

const updateExercice =
  "UPDATE exercice SET titreExercice = $1, description = $2, nombreRepElement = $3, nombreRepRep = $4, lienVideo = $5, idEquipement = $6 WHERE idExercice = $7";

module.exports = {
  getExercices,
  getExerciceById,
  checkTitreExists,
  addExerciceWithoutEquipement,
  addExercice,
  removeExercice,
  updateExercice,
};
