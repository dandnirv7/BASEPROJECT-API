const { Order, User, Service } = require("../models");

const FindAllOrder = async (req, res) => {
  try {
    const order = await Order.findAll();

    return res.status(200).send({
      status: 200,
      message: "OK",
      data: order,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};
const FindOneOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.FindByPk(id);

    if (!order) {
      return res.status(404).send({
        status: 404,
        message: "Data Not Found",
        data: null,
      });
    }

    return res.status(200).send({
      status: 200,
      message: "OK",
      data: order,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};
const CreateOrder = async (req, res) => {
  try {
    const { order_weight, order_status, order_date } = req.body;

    const user = await User.findOne({
      order: [["createdAt", "DESC"]],
    });

    const existingUserOrder = await Order.findOne({
      where: {
        user_id: user.user_id,
      },
    });

    const service = await Service.findOne({
      order: [["createdAt", "DESC"]],
    });

    const existingServiceOrder = await Order.findOne({
      where: {
        service_id: service.service_id,
      },
    });

    if (existingUserOrder || existingServiceOrder) {
      return res.status(400).send({
        status: 400,
        message: "An order with the same user or service already exists",
      });
    }

    const order = await Order.create({
      user_id: user.user_id,
      service_id: service.service_id,
      order_weight,
      order_status,
      order_date,
    });

    return res.status(201).send({
      status: 201,
      message: "Created",
      data: order,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const UpdateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { order_weight, order_status, order_date } = req.body;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).send({
        status: 404,
        message: "Data Not Found",
        data: null,
      });
    }

    order.order_weight = order_weight;
    order.order_status = order_status;
    order.order_date = order_date;

    await order.save();

    return res.status(200).send({
      status: 200,
      message: "Updated successfully",
      data: order,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};
const PatchOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { order_status, order_price, order_date } = req.body;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).send({
        status: 404,
        message: "Data Not Found",
        data: null,
      });
    }

    if (order_status) {
      order.order_status = order_status;
    }

    if (order_price) {
      order.order_price = order_price;
    }

    if (order_date) {
      order.order_date = order_date;
    }

    await order.save();

    return res.status(200).send({
      status: 200,
      message: "Patch Successfully",
      data: order,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};
const DeleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).send({
        status: 404,
        message: "Data Not Found",
        data: null,
      });
    }

    await order.destroy();

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
  FindAllOrder,
  FindOneOrder,
  CreateOrder,
  UpdateOrder,
  PatchOrder,
  DeleteOrder,
};
