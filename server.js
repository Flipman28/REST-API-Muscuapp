const express = require("express");
const equipementRoutes = require("./src/equipement/routes");
const exerciceRoutes = require("./src/exercice/routes");
const entrainementRoutes = require("./src/entrainement/routes");

const app = express();

// Bien choisir un port libre (netsat -a) pour avoir la liste des connexions actives
const port = 5433;
// Port : 3000 pour postgreSQL

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Utilisation Equipement
app.use("/api/v1/equipement", equipementRoutes);

// Utilisation Exercice
app.use("/api/v1/exercice", exerciceRoutes);

// Utilisation Entrainement
app.use("/api/v1/entrainement", entrainementRoutes);

app.listen(port, () => console.log(`App listening on ${port}`));
