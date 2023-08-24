const pool = require("../../bdd");
const queries = require("./queries");

const getEntrainements = (req, res) => {
  pool.query(queries.getEntrainements, (error, results) => {
    if (error) throw error;
    else res.status(200).json(results.rows);
  });
};

const getEntrainementById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getEntrainementById, [id], (error, results) => {
    if (error) throw error;
    else {
      if (results.rows.length != 0) res.status(200).json(results.rows);
      else
        res.status(404).send("L'id de l'entrainement choisi est introuvable");
    }
  });
};

const addEntrainement = (req, res) => {
  const { nomEntrainement } = req.body;

  // Check si le nom existe déjà
  pool.query(queries.checkNameExists, [nomEntrainement], (error, results) => {
    if (results.rows.length) {
      res.status(409).send("Nom de l'entrainement existe déjà !");
    } else {
      // Ajouter l'entrainement à la BDD
      pool.query(
        queries.addEntrainement,
        [nomEntrainement],
        (error, results) => {
          if (error) throw error;
          else res.status(201).send("Entrainement créé correctement !");
        }
      );
    }
  });
};

const removeEntrainement = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getEntrainementById, [id], (error, results) => {
    const noEntrainementFound = !results.rows.length;
    if (noEntrainementFound) {
      res
        .status(404)
        .send("L'entrainement n'est pas en base, impossible de le supprimer.");
    } else {
      pool.query(queries.removeEntrainement, [id], (error, results) => {
        if (error) {
          throw error;
        } else res.status(200).send("L'entrainement a bien été supprimé !");
      });
    }
  });
};

const updateEntrainement = (req, res) => {
  const id = parseInt(req.params.id);

  const { nomEntrainement } = req.body;

  pool.query(queries.getEntrainementById, [id], (error, results) => {
    const noEntrainementFound = !results.rows.length;
    if (noEntrainementFound) {
      res
        .status(404)
        .send("L'entrainement n'est pas en base, impossible de le modifier.");
    } else {
      pool.query(
        queries.updateEntrainement,
        [nomEntrainement, id],
        (error, results) => {
          if (error) throw error;
          else
            res.status(200).send("L'entrainement a été modifié avec succès !");
        }
      );
    }
  });
};

module.exports = {
  getEntrainements,
  getEntrainementById,
  addEntrainement,
  removeEntrainement,
  updateEntrainement,
};
