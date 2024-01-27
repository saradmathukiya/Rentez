const express = require("express")
const router = express.Router()

const { auth, isSeller } = require("../middlewares/auth")

const {createListing, getAllListings, getPropertyDetail, deleteListing} = require("../controllers/Property")

router.post("/createListing", auth, isSeller, createListing);

router.get("/getAllListings", getAllListings);

router.get("/getPropertyDetail", getPropertyDetail);

router.delete("/deleteListing", auth, isSeller, deleteListing);

module.exports = router;