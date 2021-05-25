export default function initUsersController(db) {
  const getUsers = async (req, res) => {
    try {
      const users = await db.User.findAll();
      res.send({ users });
    }
    catch (error) {
      console.log(error);
    }
  };

  const login = async (req, res) => {
    try {
      const checkUser = await db.User.findOne({
        where: {
          username: req.body.username,
          password: req.body.password,
        },
      });
      if (checkUser === null) {
        res.send('invalid');
      } else {
        const { password, ...nonSensitiveUserInfo } = checkUser.dataValues;
        res.cookie('userId', checkUser.id);
        res.send(nonSensitiveUserInfo);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { getUsers, login };
}
