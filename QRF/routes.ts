import * as express from 'express';
import * as controller from './controller';
import * as jwt from 'express-jwt';

const router = express.Router();
const auth = jwt({
    userProperty: 'payload',
    secret: process.env.JWT_SECRET
});

//BASE API  /api/v1/qrf

router.get("/", controller.getMine);

router.get("/:id", controller.findOne);

router.post('/', controller.create);

router.put('/:id', controller.join);

router.put('/chat/:id', controller.message);

export = router;
