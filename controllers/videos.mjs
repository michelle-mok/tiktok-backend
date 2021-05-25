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
      response.send(200);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
  };
}
