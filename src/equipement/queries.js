const getEquipements = "SELECT * FROM equipement";

// $1 : pour le premier paramètre à passer
const getEquipementById = "SELECT * FROM equipement WHERE idEquipement = $1";

const checkNameExists = "SELECT * FROM equipement WHERE nomEquipement = $1";

const addEquipement = "INSERT INTO equipement (nomEquipement) VALUES ($1)";

const removeEquipement = "DELETE FROM equipement WHERE idEquipement = $1";

const updateEquipement =
  "UPDATE equipement SET nomEquipement = $1 WHERE idEquipement = $2";

module.exports = {
  getEquipements,
  getEquipementById,
  checkNameExists,
  addEquipement,
  removeEquipement,
  updateEquipement,
};
