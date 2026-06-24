const express = require("express");

const router = express.Router();

const {
  getMembers,
  getMemberById,
  addMember,
  updateMember,
  deleteMember,
} = require("../controllers/memberController");

router.get("/", getMembers);

router.get("/:id", getMemberById);

router.post("/", addMember);

router.put("/:id", updateMember);

router.delete("/:id", deleteMember);

module.exports = router;