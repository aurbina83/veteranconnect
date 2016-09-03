namespace app.i {
    export interface ISOS {
        _id: any,
        user: (string | IUser),
        dateCreated: Date,
        description: string,
        responders: [string | IUser],
        comments: [string | IComment]
    }
}
