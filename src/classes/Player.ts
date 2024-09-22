import { IsPlayer } from "../interfaces/isPlayer.js";

export class Player implements IsPlayer {
  constructor(
    public name: string,
    public age: number,
    public country: string
  ) {}

  public play(): string {
    return `${this.name} come form ${this.country}`;
  }
}
