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
      console.log(req.body);
      const checkUser = await db.User.findOne({
        where: {
          username: req.body.username,
          password: req.body.password,
        },
      });
      console.log(checkUser);
      if (checkUser === null) {
        res.send('yo not found');
      } else {
        res.send(200);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { getUsers, login };
}
