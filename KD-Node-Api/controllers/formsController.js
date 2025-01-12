const jwt = require("jsonwebtoken");
const Registration = require("../models/Registration");
const Hitsix = require("../models/Hitsix");
const Mna = require("../models/Mna");

exports.registration = async (req, res) => {
  try {
    const { formData } = req.body;
    const registration = await Registration.create({
      formData,
      userId: req.userId,
    });

    res.status(201).json({
      message: "Registration Form submitted successfully",
      registration,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.findAll({
      where: { userId: req.userId },
    });
    res.json(registrations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.hitsix = async (req, res) => {
  try {
    const { formData, hitSixScore } = req.body;
    const hitsix = await Hitsix.create({
      formData,//question as key and object as answer
      hitSixScore,
      userId: req.userId,
    });

    res
      .status(201)
      .json({ message: "Hit Six Form submitted successfully", hitsix });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getHitSixDetails = async (req, res) => {
  try {
    const hitSixDetails = await Hitsix.findAll({
      where: { userId: req.userId },
    });
    res.json(hitSixDetails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.mna = async (req, res) => {
  try {
    const { formData, mnaScore } = req.body;
    const mna = await Mna.create({
      formData,
      mnaScore,
      userId: req.userId,
    });

    res.status(201).json({ message: "MNA Form submitted successfully", mna });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMnaDetails = async (req, res) => {
  try {
    const mnaDetails = await Mna.findAll({
      where: { userId: req.userId },
    });
    res.json(mnaDetails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
