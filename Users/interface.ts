namespace app.i {
    export interface IUser {
        _id: any;
        dateCreated: Date;
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
        oneSignal: {id: string, pushToken: string};
        platform: string;
        appVersion: string;

        events?: Array<string | IEvent>
    }
}
