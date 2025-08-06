
import * as httpResponse from "../utils/http_helper";
import * as repository from "../repositories/club_repository";
export const getClub = async () => {

    const data = await repository.findAllClubs();
    return await httpResponse.success(data);

}