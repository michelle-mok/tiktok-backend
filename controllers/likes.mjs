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

  // get all likes associated with a video
  const getLikes = async (req, res) => {
    console.log('req.params.id', req.params.id);

    try {
      const likes = await db.Like.count({
        where: {
          videoId: req.params.id,
        },
      });
      console.log('all likes for this video=====', likes);
      res.send({ likes });
    }
    catch (error) {
      console.log(error);
    }
  };

  return { addLike, subtractLike, getLikes };
}
