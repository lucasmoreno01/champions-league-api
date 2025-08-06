import e, { Request, Response } from "express";
import * as service from "../services/clubs_service";

export const getClub = async (req: Request, res: Response) => {

    const httpResponse = await  service.getClub();

    res.status(httpResponse.statusCode).json(httpResponse.body);

}
