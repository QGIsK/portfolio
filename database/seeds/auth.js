require("dotenv").config();
require("module-alias/register");

const DB = require("@database");

const { ADMIN_NAME, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

const auth = async () => {
  const user = await DB.Admin.count({});

  if (!ADMIN_NAME || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.log("Please fill env file");
    process.exit(1);
  }

  user > 0
    ? (console.log("Admin already exists"), process.exit(1))
    : new DB.Admin({ name: ADMIN_NAME, email: ADMIN_EMAIL, password: ADMIN_PASSWORD })
        .save()
        .then(() => {
          console.log("Admin seeded");

          process.exit(1);
        });
};

auth();
