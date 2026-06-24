const Member = require("../models/Member");

// Get All Members
const getMembers = async (req, res) => {
  const members = await Member.find();
  res.json(members);
};

// Get Single Member
const getMemberById = async (req, res) => {
  const member = await Member.findById(req.params.id);

  if (!member) {
    return res.status(404).json({
      message: "Member not found",
    });
  }

  res.json(member);
};

// Add Member
const addMember = async (req, res) => {
  const member = await Member.create(req.body);

  res.status(201).json(member);
};

// Update Member
const updateMember = async (req, res) => {
  const member = await Member.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(member);
};

// Delete Member
const deleteMember = async (req, res) => {
  await Member.findByIdAndDelete(req.params.id);

  res.json({
    message: "Member Deleted",
  });
};

module.exports = {
  getMembers,
  getMemberById,
  addMember,
  updateMember,
  deleteMember,
};