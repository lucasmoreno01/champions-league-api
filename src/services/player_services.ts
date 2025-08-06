import { PlayerModel, StatisticsModel } from "../models/player_model";
import * as playerRepository from "../repositories/player_repository";
import * as httpResponse from "../utils/http_helper";

export const getPlayer = async () => {
    const data = await playerRepository.findAllPlayers();
    if (data) {

        return await httpResponse.success(data);
    } else {
        return await httpResponse.noContent();
    }
}
export const getPlayerById = async (id: number) => {
    const data = await playerRepository.findPlayerById(id);
    if (data) {
        return httpResponse.success(data);
    } else {
        return httpResponse.noContent();
    }
}

export const createPlayer = async (playerData: PlayerModel) => {
    if (Object.keys(playerData).length > 0) {
        await playerRepository.insertPlayer(playerData);
        return httpResponse.created();
    } else {
        return httpResponse.badRequest();
    }
}

export const deletePlayer = async (id: number) => {
    const isDeleted = await playerRepository.deletePlayer(id);

    if (isDeleted) {
        return httpResponse.success({ message: "Player deleted successfully" });
    } else {
        return httpResponse.badRequest();
    }

}

export const updatePlayer = async (id: number, statistics: StatisticsModel) => {
    const data = await playerRepository.findAndModifyPlayer(id, statistics);

    if (!data) {
        return httpResponse.noContent();
    }
    if (Object.keys(data).length === 0) {
        return httpResponse.badRequest();
    }
    const response = await httpResponse.success(data);
    return response
}