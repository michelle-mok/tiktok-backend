import { resolve } from 'path';
import db from './models/index.mjs';

import initVideosController from './controllers/videos.mjs';
import initUsersController from './controllers/users.mjs';
import initLikesController from './controllers/likes.mjs';
import initFollowsController from './controllers/follows.mjs';

export default function routes(app) {
  const VideosController = initVideosController(db);
  app.get('/foryou', VideosController.index);
  app.get('/userVideos', VideosController.userVideos);
  app.post('/uploadVideo', VideosController.uploadVideo);

  const UsersController = initUsersController(db);
  app.get('/users', UsersController.getUsers);
  app.post('/login', UsersController.login);
  app.get('/userInfo', UsersController.getUserInfo);

  const LikesController = initLikesController(db);
  app.post('/addLike', LikesController.addLike);
  app.post('/subtractLike', LikesController.subtractLike);
  app.get('/likedVideos', LikesController.getLikedVideos);

  const FollowsController = initFollowsController(db);
  app.get('/userFollowers', FollowsController.getFollowers);
  app.get('/userFollowing', FollowsController.getFollowing);

  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
