const { Payment, Order } = require("../models");

const FindAllPayment = async (req, res) => {
  try {
    const payment = await Payment.findAll();

    return res.status(200).send({
      status: 200,
      message: "OK",
      data: payment,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const FindOnePayment = async (req, res) => {
  try {
    const { id } = req.params;

    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).send({
        status: 404,
        message: "Data Not Found",
        data: null,
      });
    }

    return res.status(200).send({
      status: 200,
      message: "OK",
      data: payment,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const CreatePayment = async (req, res) => {
  try {
    const { order_id, payment_method, payment_amount, payment_date } = req.body;

    const order = await Order.findOne({
      where: {
        order_id: order_id,
      },
    });

    if (!order) {
      return res.status(404).send({
        status: 404,
        message: "order_id Not Found",
        data: null,
      });
    }

    const payment = await Payment.create({
      order_id,
      payment_method,
      payment_amount,
      payment_date,
    });

    await payment.setOrder(order_id);

    return res.status(201).send({
      status: 201,
      message: "Created",
      data: payment,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const UpdatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const { payment_method, payment_amount, payment_date } = req.body;

    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).send({
        status: 404,
        message: "Data Not Found",
        data: null,
      });
    }

    payment.payment_method = payment_method;
    payment.payment_amount = payment_amount;
    payment.payment_date = payment_date;

    await payment.save();

    return res.status(200).send({
      status: 200,
      message: "Update Successfully",
      data: payment,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const PatchPayment = async (req, res) => {
  try {
    const { id } = req.params;
    const { order_id, payment_method, payment_amount, payment_date } = req.body;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).send({
        status: 404,
        message: "Data Not Found",
        data: null,
      });
    }

    if (order_id) {
      payment.order_id = order_id;
    }

    if (payment_method) {
      payment.payment_method = payment_method;
    }

    if (payment_amount) {
      payment.payment_amount = payment_amount;
    }

    if (payment_date) {
      payment.payment_date = payment_date;
    }

    await payment.save();

    return res.status(200).send({
      status: 200,
      message: "Update Successfully",
      data: payment,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const DeletePayment = async (req, res) => {
  try {
    const { id } = req.params;

    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).send({
        status: 404,
        message: "Data Not Found",
        data: null,
      });
    }

    await payment.destroy();

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
  FindAllPayment,
  FindOnePayment,
  CreatePayment,
  UpdatePayment,
  PatchPayment,
  DeletePayment,
};
