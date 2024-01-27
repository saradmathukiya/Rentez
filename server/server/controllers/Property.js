const Property = require("../models/Property");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

exports.createListing = async (req, res) => {
    try {
        const userId = req.user.id;

        let { 
            propertyType,
            bhk,
            size,
            bathrooms,
            price,
            pricePer,
            description,
            city,
            state,
            pincode,
            address
        } = req.body;

        const thumbnail = req.files.thumbnail;

        const photos = req.files.photos;

        if( ! propertyType ||
            ! size ||
            ! price ||
            ! pricePer ||
            ! description ||
            ! city ||
            ! state ||
            ! pincode ||
            ! address ||
            ! thumbnail ||
            ! photos
        ) {
            return res.status(400).json({
                success: false,
                message: "Please Fill All Mandatory Details",
              })
        }

        const sellerDetails = await User.findById(userId, {
            accountType: "Seller",
          })
      
          if (!sellerDetails) {
            return res.status(404).json({
              success: false,
              message: "Seller Details Not Found",
            })
          }

        const thumbnailImage = await uploadImageToCloudinary(
            thumbnail,
            process.env.FOLDER_NAME
        )
        
        let images = [];
        for(let i = 0; i<photos.length; i++){
            var photo = await uploadImageToCloudinary(
                photos[i],
                process.env.FOLDER_NAME
            )
            images.push(`${photo.secure_url}`)
        }

        const newProperty = await Property.create({
            propertyType,
            bhk,
            size,
            bathrooms,
            price,
            pricePer,
            description,
            city,
            state,
            pincode,
            address,
            thumbnail : thumbnailImage.secure_url,
            photos : images,
            seller : userId,
        })

        await User.findByIdAndUpdate(
            {
              _id: userId,
            },
            {
              $push: {
                properties: newProperty._id,
              },
            },
            { new: true }
          )

          res.status(200).json({
            success: true,
            data: newProperty,
            message: "Property Listed Successfully",
          })


    }catch(error){
        console.error(error)
        res.status(500).json({
        success: false,
        message: "Failed to List Property",
        error: error.message,
    })
    }
}

exports.getAllListings = async (req, res) => {
    try {
        const {propertyType, bhk, bathrooms, city, state} = req.query;

        let queryObject = {};

        if(propertyType){
            queryObject.propertyType = { $regx: propertyType , $options : "i"};
        }
        if(bhk){
            queryObject.bhk = { $regx: bhk , $options : "i"};
        }
        if(bathrooms){
            queryObject.bathrooms = { $regx: bathrooms , $options : "i"};
        }
        if(city){
            queryObject.city = { $regx: city , $options : "i"};
        }
        if(state){
            queryObject.state = { $regx: state , $options : "i"};
        }
        // console.log(queryObject);

        const properties = await Property.find(queryObject).populate("seller").exec()

        return res.status(200).json({
            success : true,
            data : properties,
        })

    } catch (error) {
        console.log(error)
        return res.status(404).json({
        success: false,
        message: `Can't Fetch Properties Data`,
        error: error.message,
    })
    }
}

exports.getPropertyDetail = async (req, res) => {
    try {
        const { propertyId } = req.body
        const propertyDetails = await Property.findOne({
        _id: propertyId,
        })
        .populate({
            path: "seller",
            populate: {
            path: "additionalDetails",
            },
        })
        .exec()

        if (!propertyDetails) {
            return res.status(400).json({
              success: false,
              message: `Could not find Property with id: ${propertyId}`,
            })
          }

        return res.status(200).json({
            success : true,
            data : propertyDetails,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

exports.deleteListing  = async (req, res) => {
    try {
        const { propertyId } = req.body

        const property = await Property.findById(propertyId)
        if (!property) {
            return res.status(404).json({ message: "Listing not found" })
        }

        await Property.findByIdAndDelete(propertyId)

        return res.status(200).json({
        success: true,
        message: "Listing deleted successfully",
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
        success: false,
        message: "Server error while deleting listing",
        error: error.message,
        })
    }
}