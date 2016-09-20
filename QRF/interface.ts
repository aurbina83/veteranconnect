namespace app.i {
    export interface IQRF {
        _id: any;
        messages: [ {
            _id: any,
            message: string,
            imgUrl: string,
            firstName: string,
            lastName: string,
            branch: string,
            datePosted: Date
        }];
        location: [number];
        limit: number;
        creator: (string | IUser);
        qrf: [string | IUser];
        dateCreated: Date;
        expirationDate?: Date;
    }
}
