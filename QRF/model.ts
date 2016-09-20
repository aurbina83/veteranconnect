import * as mongoose from 'mongoose';

export interface IQRFModel extends app.i.IQRF, mongoose.Document{}

let QRFSchema = new mongoose.Schema({
    messages: [ {
        message: {type: String},
        imgUrl: {type: String},
        firstName: {type: String},
        lastName: {type: String},
        branch: {type: String},
        datePosted: {type: Date}
    }],
    description: {type: String},
    location: { type: [Number], index: '2dsphere'},
    limit: {type: Number},
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    qrf: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    dateCreated: {type: Date},
    expirationDate: {type: Date},
    creatorInfo: {
        firstName: {type: String},
        lastName: {type: String},
        imgUrl: {type: String},
        branch: {type: String},
        branchImg: {type: String}
    }
});

export let QRF = mongoose.model<IQRFModel>('QRF', QRFSchema);
