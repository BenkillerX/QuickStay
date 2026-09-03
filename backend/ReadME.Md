quickstay-backend/
│
├── src/
│   │
│   ├── config/
│   │   ├── db.js
│   │   └── ...
│   │
│   ├── modules/
│   │   │
│   │   ├── auth/
│   │   │   ├── auth.controller.js
│   │   │   ├── auth.routes.js
│   │   │   ├── auth.validator.js
│   │   │   └── auth.service.js
│   │   │
│   │   ├── users/
│   │   │   ├── user.model.js
│   │   │   ├── user.controller.js
│   │   │   ├── user.routes.js
│   │   │   ├── user.validator.js
│   │   │   └── user.service.js
│   │   │
│   │   ├── properties/
│   │   │   ├── property.model.js
│   │   │   ├── property.controller.js
│   │   │   ├── property.routes.js
│   │   │   ├── property.validator.js
│   │   │   └── property.service.js
│   │   │
│   │   ├── bookings/
│   │   │   ├── booking.model.js
│   │   │   ├── booking.controller.js
│   │   │   ├── booking.routes.js
│   │   │   ├── booking.validator.js
│   │   │   └── booking.service.js
│   │   │
│   │   └── ...
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   └── ...
│   │
│   ├── utils/
│   │   ├── generateToken.js
│   │   └── ...
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md

1. Register
      ↓
2. Login
      ↓
3. Generate JWT
      ↓
4. Authenticate JWT middleware
      ↓
5. GET /me
      ↓
6. Test the entire authentication flow
      ↓
7. Authorization / roles
      ↓
8. Logout strategy
      ↓
9. Email verification
      ↓
10. Forgot/reset password