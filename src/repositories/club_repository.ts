import { ClubModel } from "../models/club_model";
import fs from "fs";

export const findAllClubs = async () => {

    const data = fs.readFileSync("src/data/clubs.json", "utf-8");
    const clubs: ClubModel[] = JSON.parse(data);
    return clubs;
}