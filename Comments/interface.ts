namespace app.i {
    export interface IComment {
        _id: any;
        message: string;
        datePosted: Date;
        event: (string | IEvent);
        user: (string | IUser);
    }
}
