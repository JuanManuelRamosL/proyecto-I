const { Router } = require("express");
const getDriver = require("../controllers/getDriver")
const getDriverId = require("../controllers/getDriverId")
const getDriversName = require("../controllers/getDriverName")
const postDriver = require("../controllers/postDriver");
const getTeams = require("../controllers/getTeam");
const Name = require("../controllers/pruebaName");
const deleteDriver = require("../controllers/deleteDriver");
const deleteDriverN = require("../controllers/deleteName");

const router = Router();

router.get('/drivers', getDriver);
router.get('/drivers/:idDriver', getDriverId);
router.get('/driverss/name', getDriversName);
router.post('/driver', postDriver);
router.get('/teams', getTeams);
router.get('/prueba/name', Name);
router.delete('/delete', deleteDriver);
router.delete('/delete-name', deleteDriverN);
module.exports = router;
