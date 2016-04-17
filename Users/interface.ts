namespace app.i {
    export interface IUser {
        _id: any;
        email: string;
        password: string;
        name: string;
        facebook: {id:string, token: string};
        /**
         * loc: [lng,lat]
         */
        loc: [number];
        branch: string;
        campaign: string;
        imgUrl?: string;
        maxDist?: number;

        events?: Array<string | IEvent>
        attending?: Array<string | IEvent>
    }
}
