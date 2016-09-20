import * as express from 'express';
import * as controller from './controller';
import * as jwt from 'express-jwt';

const router = express.Router();
const auth = jwt({
    userProperty: 'payload',
    secret: process.env.JWT_SECRET
});

//BASE API  /api/v1/qrf

router.get("/", auth, controller.getMine);

router.get("/:id", auth, controller.findOne);

router.post('/', auth, controller.create);

router.put('/:id', auth, controller.join);

router.put('/chat/:id', auth, controller.message);

export = router;
