import { resolve } from 'path';
import db from './models/index.mjs';

import initVideosController from './controllers/videos.mjs';
import initUsersController from './controllers/users.mjs';
import initLikesController from './controllers/likes.mjs';

export default function routes(app) {
  const VideosController = initVideosController(db);

  const UsersController = initUsersController(db);
  app.get('/users', UsersController.getUsers);

  const LikesController = initLikesController(db);

  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
