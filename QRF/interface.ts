namespace app.i {
    export interface IQRF {
        _id: any;
        messages: [ {
            message: string,
            imgUrl: string,
            firstName: string,
            lastName: string,
            branch: string,
            datePosted: Date
        }];
        description: string,
        location: [number];
        limit: number;
        creator: (string | IUser);
        qrf: [string | IUser];
        dateCreated: Date;
        expirationDate?: Date;
        creatorInfo: {
            firstName: string;
            lastName: string;
            imgUrl: string;
            branch: string;
            branchImg: string;
        }
    }
}
