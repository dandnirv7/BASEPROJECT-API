const { Service } = require("../models");

const FindAllService = async (req, res) => {
  try {
    const service = await Service.findAll();

    return res.status(200).send({
      status: 200,
      message: "OK",
      data: service,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const FindOneService = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await Service.findByPk(id);

    if (!service) {
      return res.status(404).send({
        status: 404,
        message: "Data Not Found",
        data: null,
      });
    }

    return res.status(200).send({
      status: 200,
      message: "OK",
      data: service,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const CreateService = async (req, res) => {
  try {
    const { service_name, service_price, estimate_days } = req.body;

    const service = await Service.create({
      service_name,
      service_price,
      estimate_days,
    });

    return res.status(201).send({
      status: 201,
      message: "Created",
      data: service,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const UpdateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { service_name, service_price, estimate_days } = req.body;

    const service = await Service.findByPk(id);

    if (!service) {
      return res.status(404).send({
        status: 404,
        message: "Data Not Found",
        data: null,
      });
    }

    service.service_name = service_name;
    service.service_price = service_price;
    service.estimate_days = estimate_days;

    await service.save();

    return res.status(200).send({
      status: 200,
      message: "Update Successfully",
      data: service,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const PatchService = async (req, res) => {
  try {
    const { id } = req.params;
    const { service_name, service_price, estimate_days } = req.body;

    const service = await Service.findByPk(id);

    if (!service) {
      return res.status(404).send({
        status: 404,
        message: "Data Not Found",
        data: null,
      });
    }

    if (service_name) {
      service.service_name = service_name;
    }

    if (service_price) {
      service.service_price = service_price;
    }

    if (estimate_days) {
      service.estimate_days = estimate_days;
    }

    await service.save();

    return res.status(200).send({
      status: 200,
      message: "Update Successfully",
      data: service,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const DeleteService = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await Service.findByPk(id);

    if (!service) {
      return res.status(404).send({
        status: 404,
        message: "Data Not Found",
        data: null,
      });
    }

    await service.destroy();

    return res.status(200).send({
      status: 200,
      message: "Data has been deleted",
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
  FindAllService,
  FindOneService,
  CreateService,
  UpdateService,
  PatchService,
  DeleteService,
};
