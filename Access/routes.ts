import * as express from 'express';
import * as controller from './controller';
import * as jwt from 'express-jwt';

const router = express.Router();
const auth = jwt({
    userProperty: 'payload',
    secret: process.env.JWT_SECRET
});

router.get('/', controller.create);

router.delete('/:code', auth, controller.remove);

export = router;
