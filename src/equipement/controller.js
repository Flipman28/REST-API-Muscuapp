const pool = require("../../bdd");
const queries = require("./queries");

const getEquipements = (req, res) => {
  pool.query(queries.getEquipements, (error, results) => {
    if (error) throw error;
    else res.status(200).json(results.rows);
  });
};

const addEquipement = (req, res) => {
  // Faire un tableau si plusieurs éléments exemple :
  // const { name, email, age, dob } = req.body;
  const { nomEquipement } = req.body;

  // Check si le nom existe déjà
  pool.query(queries.checkNameExists, [nomEquipement], (error, results) => {
    if (results.rows.length) {
      res.status(409).send("Nom de l'équipement existe déjà !");
    } else {
      // Ajouter l'équipement à la BDD
      pool.query(queries.addEquipement, [nomEquipement], (error, results) => {
        if (error) throw error;
        else res.status(201).send("Equipement créé correctement !");
      });
    }
  });
};

const getEquipementById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getEquipementById, [id], (error, results) => {
    if (error) throw error;
    else {
      if (results.rows.length != 0) res.status(200).json(results.rows);
      else res.status(404).send("L'id de l'équipement choisi est introuvable");
    }
  });
};

const removeEquipement = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getEquipementById, [id], (error, results) => {
    const noEquipementFound = !results.rows.length;
    if (noEquipementFound) {
      res
        .status(404)
        .send("L'équipement n'est pas en base, impossible de le supprimer.");
    } else {
      pool.query(queries.removeEquipement, [id], (error, results) => {
        if (error) {
          throw error;
        } else res.status(200).send("L'équipement a bien été supprimé !");
      });
    }
  });
};

const updateEquipement = (req, res) => {
  const id = parseInt(req.params.id);

  const { nomEquipement } = req.body;

  pool.query(queries.getEquipementById, [id], (error, results) => {
    const noEquipementFound = !results.rows.length;
    if (noEquipementFound) {
      res
        .status(404)
        .send("L'équipement n'est pas en base, impossible de le modifier.");
    } else {
      pool.query(
        queries.updateEquipement,
        [nomEquipement, id],
        (error, results) => {
          if (error) throw error;
          else res.status(200).send("L'équipement a été modifié avec succès !");
        }
      );
    }
  });
};

module.exports = {
  getEquipements,
  getEquipementById,
  addEquipement,
  removeEquipement,
  updateEquipement,
};
