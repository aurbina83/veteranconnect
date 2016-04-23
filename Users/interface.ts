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
        campaign?: string;
        imgUrl?: string;

        events?: Array<string | IEvent>
        attending?: Array<string | IEvent>
    }
}
