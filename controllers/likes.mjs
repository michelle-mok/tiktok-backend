import pkg from 'sequelize';
const { Op } = pkg;

export default function initLikesController(db) {
    // add a like to the likes table
    const addLike = async (req, res) => {
    console.log('request body ======', req.body)
    console.log('user id', req.cookies.userId)

    try {
      const newLike = await db.Like.create({
      videoId: Number(req.body.videoId),
      userId: req.cookies.userId,
      })
      console.log(newLike);

      const newCount = await db.Like.count({
          where: {
               videoId: Number(req.body.videoId),
            }
      })
      console.log('new count of likes =====', newCount);

      res.send({newCount});
    }
    catch (error) {
      console.log(error)
    }
  }

  // delete a like from the likes table
  const subtractLike = async (req, res) => {
    console.log('request body ======', req.body)
    console.log('user id', req.cookies.userId)

    try {
      const deletedLike = await db.Like.destroy({
        where: {
            [Op.and]: [{videoId: Number(req.body.videoId)},
      {userId: req.cookies.userId}],
        }
      })
      console.log(deletedLike);

      const newCount = await db.Like.count({
          where: {
               videoId: Number(req.body.videoId),
            }
      })
      console.log('new count of likes =====', newCount);

      res.send({newCount});
    }
    catch (error) {
      console.log(error)
    }
  }

  // get all likes associated with a video
  const getLikes = async (req, res) => {
      console.log('req.params.id', req.params.id);

      try {
          const likes = db.Like.count({
              where: {
                  videoId: req.params.id,
              }
          })
          console.log('all likes for this video=====', likes);
          res.send({})
      }
      catch (error) {
          console.log(error);
      }
  }

  return { addLike, subtractLike, getLikes }
}
