export interface ILevel {
    key: string;
    num: number;
    starTime: number;
    devAllStar: number;
    devNoStar: number;
    levelStars: {
        speed: boolean;
        enemies: boolean;
        coins: boolean;
    };
    playerStarTime: number;
    playerAnyTime: number;
    locked: boolean;
    current: boolean;
    complete: boolean;
}

export class Level implements ILevel {
    key: string;
    num: number;
    starTime: number;
    devAllStar: number;
    devNoStar: number;
    levelStars: {
        speed: boolean;
        enemies: boolean;
        coins: boolean;
    };
    playerStarTime: number;
    playerAnyTime: number;
    locked: boolean;
    current: boolean;
    complete: boolean;

    constructor(key: string, starTime: number, devAllStar: number, devNoStar: number) {
        this.key = key;
        this.starTime = starTime;
        this.devAllStar = devAllStar;
        this.devNoStar = devNoStar;
        this.levelStars = {
            speed: false,
            enemies: false,
            coins: false
        };
        this.playerStarTime = -1;
        this.playerAnyTime = -1;
        this.locked = true;
        this.current = false;
        this.complete = false;
    }


    setStars(speed: boolean, enemies: boolean, coins: boolean) {
        this.levelStars.speed = this.levelStars.speed || speed;
        this.levelStars.enemies = this.levelStars.enemies || enemies;
        this.levelStars.coins = this.levelStars.coins || coins;
    }

}
