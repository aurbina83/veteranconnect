namespace app.i {
    export interface IEvent {
        _id: any;
        title: string;
        name: string;
        description: string;
        numGuests: number;
        /**
         * loc: [lng, lat]
         */
        loc: [number];
        eventAddress: string;
        city: string;
        state: string;
        dateTime: any;
        dateCreated: Date;
        eventCreator: (string | IUser);

        attending: [any];
        comments: [ string | IComment ];
    }
}
