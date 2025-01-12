const express = require("express");
const {
  registration,
  getRegistrations,
  hitsix,
  getHitSixDetails,
  mna,
  getMnaDetails,
} = require("../controllers/formsController");
const authenticate = require("../middleware/auth");
const router = express.Router();

router.post("/registration", authenticate, registration); //patient register 
router.get("/get/patients", authenticate, getRegistrations); // to get register details
router.post("/hitsix", authenticate, hitsix); //to send hit 
router.get("/get/hitsix", authenticate, getHitSixDetails);
router.post("/mna", mna);
router.get("/get/mna", getMnaDetails);

module.exports = router;
