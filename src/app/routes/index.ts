import express from 'express';
// import { userRoute } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: 'some route', // have add route like this like userRoute
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
