const pool = require("../../bdd");
const queries = require("./queries");

const getExercices = (req, res) => {
  pool.query(queries.getExercices, (error, results) => {
    if (error) throw error;
    else res.status(200).json(results.rows);
  });
};

const addExercice = (req, res) => {
  const {
    titreExercice,
    description,
    nombreRepElement,
    nombreRepRep,
    lienVideo,
    idEquipement,
  } = req.body;

  // Check si le nom existe déjà
  pool.query(queries.checkTitreExists, [titreExercice], (error, results) => {
    if (results.rows.length) {
      res.status(409).send("Le titre de l'exercice existe déjà !");
    } else {
      // Ajouter l'exercice à la BDD
      pool.query(
        queries.addExercice,
        [
          titreExercice,
          description,
          nombreRepElement,
          nombreRepRep,
          lienVideo,
          idEquipement,
        ],
        (error, results) => {
          if (error) throw error;
          else res.status(201).send("Equipement créé correctement !");
        }
      );
    }
  });
};

const getExerciceById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getExerciceById, [id], (error, results) => {
    if (error) throw error;
    else {
      if (results.rows.length != 0) res.status(200).json(results.rows);
      else res.status(404).send("L'id de l'exercice choisi est introuvable");
    }
  });
};

const removeExercice = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getExerciceById, [id], (error, results) => {
    const noExerciceFound = !results.rows.length;
    if (noExerciceFound) {
      res
        .status(404)
        .send("L'exercice n'est pas en base, impossible de le supprimer.");
    } else {
      pool.query(queries.removeExercice, [id], (error, results) => {
        if (error) {
          throw error;
        } else res.status(200).send("L'exercice a bien été supprimé !");
      });
    }
  });
};

const updateExercice = (req, res) => {
  const id = parseInt(req.params.id);

  const {
    titreExercice,
    description,
    nombreRepElement,
    nombreRepRep,
    lienVideo,
    idEquipement,
  } = req.body;

  pool.query(queries.getExerciceById, [id], (error, results) => {
    const noExerciceFound = !results.rows.length;
    if (noExerciceFound) {
      res
        .status(404)
        .send("L'exercice n'est pas en base, impossible de le modifier.");
    } else {
      pool.query(
        queries.updateExercice,
        [
          titreExercice,
          description,
          nombreRepElement,
          nombreRepRep,
          lienVideo,
          idEquipement,
          id,
        ],
        (error, results) => {
          if (error) throw error;
          else res.status(200).send("L'exercice a été modifié avec succès !");
        }
      );
    }
  });
};

module.exports = {
  getExercices,
  getExerciceById,
  addExercice,
  removeExercice,
  updateExercice,
};
