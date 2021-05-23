export default function initVideosController(db) {
  const index = async (request, response) => {
    try {
      const videos = await db.Video.findAll();
      response.send({ videos });
    } catch (error) {
      console.log(error);
    }
  };
 
  return {
    index, 
  };
}
