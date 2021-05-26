export default function initVideosController(db) {
  const index = async (request, response) => {
    try {
      const videos = await db.Video.findAll({
        include: [{
          model: db.User,
          attributes: ['id', 'username', 'profilePic'],
        }, { model: db.Like }],
      });
      response.send(videos);
    } catch (error) {
      console.log(error);
    }
  };

  const userVideos = async (req, res) => {
    console.log('user id: =====', req.cookies.userId)
    try {
      const videos = await db.Video.findAll({
        where: {
          userId: Number(req.cookies.userId),
        }
      })
      console.log('list of user videos', videos);
      res.send ({ videos });
    }
    catch (error) {
      console.log(error)
    }
  }

  return {
    index, userVideos
  };
}
