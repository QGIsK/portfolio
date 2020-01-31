require("dotenv").config();

/**
 * Setup db
 */

const db = require("../");

/**
 * Seed the database
 */

const seedAdmin = async () => {
  const users =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? [
          {
            name: "Demian",
            admin: true,
            email: "admin@example.com",
            password: "test123123",
          },
          {
            name: "Test",
            admin: false,
            email: "notadmin@example.com",
            password: "test123123",
          },
        ]
      : [
          {
            name: "Demian",
            admin: true,
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD,
          },
        ];

  for (const user of users) {
    let newUser = new db.User(user);
    await newUser.save();
  }
};

const seedDB = async () => {
  await seedAdmin();

  process.exit();
};

seedDB();
