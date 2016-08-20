namespace app.i {
    export interface IUser {
        _id: any;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        facebook: {id:string, token: string};
        loc?: [number];
        locStamp: number;
        branch?: string;
        mos?: string;
        branchImg?: string;
        imgUrl?: string;
        verified: boolean;

        events?: Array<string | IEvent>
    }
}
