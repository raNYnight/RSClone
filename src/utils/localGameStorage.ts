import { PlayedTest } from "./types";

export class LocalGameStorage {
  static initStorage(): void{
    const isStorageExist = localStorage.getItem('games');
    if (!isStorageExist) localStorage.setItem('games', JSON.stringify([]));
  }

  static getGames(): PlayedTest[]{
    this.initStorage();
    const gamesListJSON = localStorage.getItem('games');
    return JSON.parse(gamesListJSON || '[]');
  }

  static addGame(game: PlayedTest): void{
    this.initStorage();
    const gamesList = this.getGames();
    gamesList.push(game);
    localStorage.setItem('games', JSON.stringify(gamesList));
  }

  static removeAllGames(): void{
    localStorage.removeItem('games');
  }
}