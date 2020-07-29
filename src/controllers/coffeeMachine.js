import { CoffeeMachines } from "../models";

export const findAll = async (req, res) => {
  try {
    // Screening step to use only provided queries
    const searchKeys = ["productType", "waterLine", "machineModel"];

    const conditions = searchKeys.reduce((acc, searchKey) => {
      const searchValue = req.query[searchKey];
      if (searchValue) acc[searchKey] = searchValue;
      return acc;
    }, {});

    let machines = await CoffeeMachines.find(conditions)
      .populate("productType", "-__v")
      .populate("machineModel", "-__v")
      .select("-__v")
      .exec();

    res.send(machines);
  } catch (err) {
    res.status(500).send(err);
  }
};
