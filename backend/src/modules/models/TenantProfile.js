import mongoose from "mongoose";

const tenantProfileSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true
        },

        phone: {
            type: String,
            trim: true
        },

        profileImage: {
            type: String,
            default: null
        }
    },
    {
        timestamps: true
    }
);

const TenantProfile = mongoose.model(
    "TenantProfile",
    tenantProfileSchema
);

export default TenantProfile;