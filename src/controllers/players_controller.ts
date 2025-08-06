import e, { Request, Response } from "express";
import * as service from "../services/player_services";
import { noContent } from "../utils/http_helper";
import { PlayerModel, StatisticsModel } from "../models/player_model";

export const getPlayer = async (req: Request, res: Response) => {

    const httpResponse = await  service.getPlayer();

    res.status(httpResponse.statusCode).json(httpResponse.body);

}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const httpResponse = await service.getPlayerById(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer = async (req: Request, res: Response) => {
    const value = req.body;
    const httpResponse = await  service.createPlayer(value);

    if (httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } else{
        const response = await noContent();
        res.status(response.statusCode).json(response.body);
    }


}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await  service.deletePlayer(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const updatePlayer = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id);
    const statistics: StatisticsModel  = req.body.statistics;
    const httpResponse = await service.updatePlayer(id, statistics);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}