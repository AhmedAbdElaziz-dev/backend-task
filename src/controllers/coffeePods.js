import { CoffeePod } from "../models";

export const findAll = async (req, res) => {
  try {
    const searchKeys = ["productType", "coffeeFlavour", "packSize"];

    // Screening step to use only provided queries
    const conditions = searchKeys.reduce((acc, searchKey) => {
      const searchValue = req.query[searchKey];
      if (searchValue) acc[searchKey] = searchValue;
      return acc;
    }, {});

    let pods = await CoffeePod.find(conditions)
      .populate("productType", "-__v")
      .populate("coffeeFlavour", "-__v")
      .populate("packSize", "-__v")
      .select("-__v")
      .exec();

    res.send(pods);
  } catch (err) {
    res.status(500).send(err);
  }
};
