import { ApiGatway } from "../common/api/ApiGatway";
import { CustomerService } from "./customers/CustomerService";
import { RoomService } from "./room/RoomService";

export class ServicesFactory {
    private static customerService: CustomerService;
    private static roomService: RoomService;

    static init(apiGateway: ApiGatway) {
        ServicesFactory.customerService = new CustomerService(apiGateway);
        ServicesFactory.roomService = new RoomService(apiGateway);
    }

    static getCustomerService(): CustomerService {
        if (!ServicesFactory.customerService) {
            throw new Error(
                "Canot get CustomerService before init SrevicesFactory"
            );
        }
        return ServicesFactory.customerService;
    }

    static getRoomService(): RoomService {
        if (!ServicesFactory.roomService) {
            throw new Error(
                "Canot get RoomService before init SrevicesFactory"
            );
        }

        return ServicesFactory.roomService;
    }
}
