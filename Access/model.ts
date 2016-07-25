import * as mongoose from 'mongoose';
var random = require('random-js')();

export interface IAccessModel extends app.i.IAccess, mongoose.Document{
    generate(): number;
}

let accessSchema = new mongoose.Schema({
    code: {type: Number},
    expiresAt: {type: Date, index: {expireAfterSeconds: 10}}
});

accessSchema.method('generate', function(){
    var rand = random.integer(10000, 99999);
    return rand;
});

export let Access = mongoose.model<IAccessModel>('Access', accessSchema);
