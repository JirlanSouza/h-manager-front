import { ApiGatway } from "../../common/api/ApiGatway";
import { AddRoomData } from "../../models/room/Room";

export class RoomService {
    constructor(private readonly apiGateway: ApiGatway) {}

    async save(room: AddRoomData) {
        return await this.apiGateway.post<string, AddRoomData>("/rooms", room);
    }
}
