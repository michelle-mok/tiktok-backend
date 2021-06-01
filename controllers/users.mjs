import { Sequelize } from 'sequelize';

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
        // User does not exist - send invalid message
        res.send('invalid');
      } else {
        // User exists. Get other data

        const videos = await checkUser.getVideos({
          attributes: ['id', 'url'],
          include: [{
            model: db.Like,
            attributes: ['userId'],
          }],
        });

        const { password, ...nonSensitiveUserInfo } = checkUser.dataValues;
        res.cookie('userId', checkUser.id);
        res.send({ ...nonSensitiveUserInfo, videos });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserInfo = async (req, res) => {
  try {
    console.log('user id=====', req.cookies.userId);

    const user = await db.User.findOne({
      where: {
        id: Number(req.cookies.userId)
      },
    })
    console.log( 'user ======', user);

    const videoUrls = await user.getVideos({
      attributes: ['url'],
    });
    console.log('video urls', videoUrls)

    const likes = await db.Like.count({
      where: {
        userId: Number(req.cookies.userId),
      }
    })
    console.log('nnumber of likes====', likes)
    res.send({user, videoUrls, likes})
  }
  catch (error) {
    console.log(error);
  }

}

const registerUser = async (req, res) => {
  try {
    console.log('request body =====', req.body);
    
    const newUser = await db.User.create(req.body);
    console.log('new user', newUser);

    const { password, ...nonSensitiveUserInfo } = newUser.dataValues;
    res.cookie('userId', newUser.id);
    res.send({ ...nonSensitiveUserInfo });
  }
  catch (error) {
    console.log(error);
  }
}

  return { getUsers, login, getUserInfo, registerUser };
}


