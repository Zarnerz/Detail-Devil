module.exports = async function verifyUser(email, password) {
  // MAY NEED A HELPER AS WELL OR MAYBE THE VALIDATION IS IN APP.JS? NOT 100% ON THIS
  const user = await db.User.findOne({ email }); // THIS WOULD DEF BE IN CONTROLLER
  const dbPassword = user.password;
  const isValid = await bcrypt.compare(password, dbPassword);
  return {
    isValid,
    user
  };
};
