export class Services{
    _id: string;
    service_type: string;
    describe: string;

    constructor(_id: string, service_type: string, describe: string) {
        this._id = _id,
        this.service_type = service_type,
        this.describe = describe
    }
}