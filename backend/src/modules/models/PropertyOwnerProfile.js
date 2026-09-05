import mongoose from "mongoose";

const propertyOwnerProfileSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true
        },

        phone: {
            type: String,
            required: true,
            trim: true
        },

        location: {
            type: String,
            required: true,
            trim: true
        },

        bio: {
            type: String,
            trim: true,
            maxlength: 1000
        }
    },
    {
        timestamps: true
    }
);

const PropertyOwnerProfile = mongoose.model(
    "PropertyOwnerProfile",
    propertyOwnerProfileSchema
);

export default PropertyOwnerProfile;