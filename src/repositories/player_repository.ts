import { PlayerModel, StatisticsModel } from "../models/player_model";

const database: PlayerModel[] = [
  { id: 1, name: "Kevin De Bruyne", club: "Manchester City", position: "Midfielder", nacionality: "Belgian", statistics: { overall: 91, pace: 76, shooting: 86, passing: 92, dribbling: 88, defending: 64, physical: 78 } },
  { id: 2, name: "Kylian Mbappé", club: "Paris Saint-Germain", position: "Forward", nacionality: "French", statistics: { overall: 92, pace: 97, shooting: 89, passing: 80, dribbling: 92, defending: 38, physical: 76 } },
  { id: 3, name: "Jude Bellingham", club: "Real Madrid", position: "Midfielder", nacionality: "English", statistics: { overall: 88, pace: 80, shooting: 82, passing: 85, dribbling: 86, defending: 77, physical: 84 } },
  { id: 4, name: "Erling Haaland", club: "Manchester City", position: "Forward", nacionality: "Norwegian", statistics: { overall: 91, pace: 89, shooting: 93, passing: 65, dribbling: 80, defending: 45, physical: 88 } },
  { id: 5, name: "Vinícius Jr.", club: "Real Madrid", position: "Forward", nacionality: "Brazilian", statistics: { overall: 89, pace: 95, shooting: 83, passing: 78, dribbling: 92, defending: 35, physical: 70 } }
]


export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}


export const findPlayerById = async (id: number): Promise<PlayerModel | null> => {
    const player = database.find(player => player.id === id);
    return player ?? null;
}


export const insertPlayer = async (playerData: PlayerModel): Promise<PlayerModel> => {
    database.push(playerData);
    return playerData;
}

export const deletePlayer = async (id: number): Promise<boolean> => {
    const index = database.findIndex(player => player.id === id);
    if (index !== -1) {
        database.splice(index, 1);
        return true
    } 
    return false;
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel ) => {

    const player = await findPlayerById(id);
    if (player) {
        player.statistics = statistics;
        return player;
    }
    return null;
}