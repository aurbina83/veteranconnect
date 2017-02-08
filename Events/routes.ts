import * as express from 'express';
import { controller } from './controller';
import { Event } from './model';
import { User } from '../Users/model';
import {Comment} from '../Comments/model';
import * as jwt from 'express-jwt';

// "loose coupling"

const ctrl = controller(Event, User, Comment);
const router = express.Router();
const auth = jwt({
    userProperty: 'payload',
    secret: process.env.JWT_SECRET
});

// Base Route == /api/v1/events

//GET: /api/v1/events
router.get('/', ctrl.getAll);

//GET: /api/v1/events/:id
router.get('/myevents', ctrl.findMine);

router.get('/attending', ctrl.findAttending);

//GET: /api/v1/events/:id
router.get('/:id', ctrl.findOne);

//DELETE: /api/v1/events/:id
router.delete('/:id', ctrl.remove);

//POST: /api/v1/events
router.post('/', ctrl.create);

//PUT: /api/v1/events/attending/:id
router.put('/attending/:id', ctrl.attending);

//PUT: /api/v1/events/notattending/:id
router.put('/notattending/:id', ctrl.notAttending);

//PUT: /api/v1/events/:id
router.put('/:id', ctrl.update);

export = router;
