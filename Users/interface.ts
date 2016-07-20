namespace app.i {
    export interface IUser {
        _id: any;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        facebook: {id:string, token: string};
        loc?: [number];
        branch?: string;
        mos?: string;
        branchImg?: string;
        imgUrl?: string;
        verified: boolean;

        events?: Array<string | IEvent>
    }
}
