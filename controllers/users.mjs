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
      res.send(200);
    } catch (error) {
      console.log(error);
    }
  };

  return { getUsers, login };
}
