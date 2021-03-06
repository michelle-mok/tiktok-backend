export default function initVideosController(db) {
  const index = async (request, response) => {
    try {
      const videos = await db.Video.findAll({
        include: [
          {
            model: db.User,
            attributes: ['id', 'username', 'profilePic'],
          },
          {
            model: db.Like,
            attributes: ['user_id'],
          }],
      });
      response.send(videos);
    } catch (error) {
      console.log(error);
    }
  };

  const userVideos = async (req, res) => {
    console.log('user id: =====', req.cookies.userId);

    try {
      const videos = await db.Video.findAll({
        where: {
          userId: Number(req.cookies.userId),
        },
      });
      console.log('list of user videos', videos);
      res.send({ videos });
    }
    catch (error) {
      console.log(error);
    }
  };

  const uploadVideo = async (request, response) => {
    try {
      const uploadedVideo = await db.Video.create({
        url: request.body.url,
        description: request.body.description,
        userId: request.body.userId,
        music: request.body.music,
        comments: 10,
      });
      response.sendStatus(200);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index, userVideos, uploadVideo,

  };
}
