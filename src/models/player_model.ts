export interface PlayerModel {
    id: number;
    name: string;
    club: string;
    position: string;
    nacionality: string;
    statistics: {
        overall: number;
        pace: number;
        shooting: number;
        passing: number;
        dribbling: number;
        defending: number;
        physical: number;
    }

}

export interface StatisticsModel {
    overall: number;
    pace: number;
    shooting: number;
    passing: number;
    dribbling: number;
    defending: number;
    physical: number;
}