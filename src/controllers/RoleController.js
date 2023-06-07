const { Role } = require("../models");

const FindAllRole = async (req, res) => {
  try {
    const roles = await Role.findAll();

    return res.status(200).send({
      status: 200,
      message: "OK",
      data: roles,
    });
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const FindOneRole = async (req, res) => {
  try {
    const { id } = req.params;

    const roles = await Role.findOne({
      where: {
        role_id: id,
      },
    });

    if (!roles) {
      return res.status(404).send({
        status: 404,
        messge: "Data Not Found",
        data: null,
      });
    }

    return res.status(200).send({
      status: 200,
      message: "OK",
      data: roles,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const CreateRole = async (req, res) => {
  try {
    const { role_name } = req.body;

    const roles = await Role.create({
      role_name,
    });

    return res.status(201).send({
      status: 201,
      message: "Created",
      data: roles,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const UpdateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role_name } = req.body;

    const role = await Role.findByPk(id);

    if (!role) {
      return res.status(404).send({
        status: 404,
        message: "Data Not Found",
        data: null,
      });
    }

    role.role_name = role_name || role.name;

    await role.save();

    return res.status(200).send({
      status: 200,
      message: "Update Successfully",
      data: role,
    });
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const PatchRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role_name } = req.body;

    const role = await Role.findByPk(id);

    if (!role) {
      return res.status(404).send({
        status: 404,
        message: "Data Not Found",
        data: null,
      });
    }

    role.role_name = role_name;

    await role.save();

    return res.status(200).send({
      status: 200,
      message: "Patch Successfully",
      data: role,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const DeleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.findByPk(id);

    if (!role) {
      return res.status(404).send({
        status: 404,
        message: "Data Not Found",
        data: null,
      });
    }

    await role.destroy();

    return res.status(200).send({
      status: 200,
      message: "Delete Successfully",
      data: null,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

module.exports = {
  FindAllRole,
  FindOneRole,
  CreateRole,
  UpdateRole,
  PatchRole,
  DeleteRole,
};
