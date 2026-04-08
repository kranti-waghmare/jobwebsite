const express = require("express");
const UserData = require("../models/user");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const postData = new UserData(req.body);
    const saveData = await postData.save();
    res.json(saveData);
  } catch (error) {
    console.log(error);
  }
});

// router.get("/", async (req, res) => {
//   try {
//     const getData = await UserData.find();
//     res.json(getData);
//   } catch (error) {
//     console.log(error);
//   }
// });

router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";

    const skip = (page - 1) * limit;

    // 👉 search filter
    const query = {
      //qury is nothing but sendng request to database to get specific data
      $or: [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { role: { $regex: search, $options: "i" } },
      ],
    };

    // 👉 total count with search
    const total = await UserData.countDocuments(query);

    // 👉 filtered + paginated data
    const getData = await UserData.find(query).skip(skip).limit(limit);

    res.json({
      data: getData,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalRecords: total,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateData = await UserData.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.json(updateData);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteData = await UserData.findByIdAndDelete(req.params.id);
    res.json(deleteData);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
