const getEntrainements = "SELECT * FROM entrainement";

const getEntrainementById =
  "SELECT * FROM entrainement WHERE idEntrainement = $1";

const checkNameExists = "SELECT * FROM entrainement WHERE nomEntrainement = $1";

const addEntrainement =
  "INSERT INTO entrainement (nomEntrainement) VALUES ($1)";

const removeEntrainement = "DELETE FROM entrainement WHERE idEntrainement = $1";

const updateEntrainement =
  "UPDATE entrainement SET nomEntrainement = $1 WHERE idEntrainement = $2";

module.exports = {
  getEntrainements,
  getEntrainementById,
  checkNameExists,
  addEntrainement,
  removeEntrainement,
  updateEntrainement,
};
