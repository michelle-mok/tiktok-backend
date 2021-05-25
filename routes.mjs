import { resolve } from 'path';
import db from './models/index.mjs';

import initVideosController from './controllers/videos.mjs';
import initUsersController from './controllers/users.mjs';
import initLikesController from './controllers/likes.mjs';

export default function routes(app) {
  const VideosController = initVideosController(db);
  app.get('/foryou', VideosController.index);

  const UsersController = initUsersController(db);
  app.get('/users', UsersController.getUsers);
  app.post('/login', UsersController.login);

  const LikesController = initLikesController(db);
  app.post('/addLike', LikesController.addLike);
  app.post('/subtractLike', LikesController.subtractLike);

  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
