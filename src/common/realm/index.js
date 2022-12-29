import Realm from "realm";


class Complaint extends Realm.Object { }

Complaint.schema = {
    name: "Complaint",
    properties: {
        _id: "int",
        name: "string",
        status: "string?",
    },
    primaryKey: "_id",
};


export default new Realm({ schema: [Complaint] });

