import pkg from 'sequelize';

const { Op } = pkg;

export default function initLikesController(db) {
  // add a like to the likes table
  const addLike = async (req, res) => {
    try {
      console.log('== request body: ', req.body);
      console.log('== cookie user id: ', req.cookies);
      const newLike = await db.Like.create({
        videoId: Number(req.body.videoId),
        userId: Number(req.cookies.userId),
      });
      // console.log(newLike);
      res.sendStatus(200);
    }
    catch (error) {
      console.log(error);
    }
  };

  // delete a like from the likes table
  const subtractLike = async (req, res) => {
    try {
      console.log('request body ======', req.body);
      console.log('user id', req.cookies.userId);
      const deletedLike = await db.Like.destroy({
        where: {
          [Op.and]: [{ videoId: Number(req.body.videoId) },
            { userId: req.cookies.userId }],
        },
      });
      res.sendStatus(200);
    }
    catch (error) {
      console.log(error);
    }
  };

  const getLikedVideos = async (req, res) => {
    try {
      const liked = await db.Like.findAll({
        where: {
          userId: Number(req.cookies.userId),
        },
        include: [
          {
            model: db.Video,
            attributes: ['url'],
          }
        ]
      })
      console.log('liked===', liked);
      res.send({liked});
    }
    catch (error) {
      console.log(error);
    }
  }

  return {
    addLike,
    subtractLike,
    getLikedVideos,
  };
}
