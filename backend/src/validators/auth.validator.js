import {body} from 'express-validator'

export const registerValidator= [
    body("firstname")
        .trim()
        .notEmpty()
        .withMessage("First name is required."),

    body("lastname")
        .trim()
        .notEmpty()
        .withMessage("Last name is required."),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required.")
        .isEmail(),

    body("password")
        .notEmpty()
        .withMessage("Password is required.")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long."),

    body("role")
    .optional()
    .isIn(["tenant", "propertyOwner", "skillProvider"])
    .withMessage("Invalid role.")
]