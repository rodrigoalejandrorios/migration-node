const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ success: "Recibiendo la respuesta" });
});

module.exports = router;
