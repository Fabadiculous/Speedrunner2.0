class Level {
    constructor (key, starTime, devAllStar, devNoStar) {
        this._key = key;
        this._starTime = starTime;
        this._devAllStar = devAllStar;
        this._devNoStar = devNoStar;
        this._levelStars = {
            speed: false,
            enemies: false,
            coins: false
        };
        this._playerStarTime = 100;
        this._playerAnyTime = 100;
        this._locked = true;
        this._current = false;
        this._complete = false;
    }

    setStars (speed, enemies, coins) {
        let stars = this._levelStars;
        stars.speed = stars.speed || speed;
        stars.enemies = stars.enemies || enemies;
        stars.coins = stars.coins || coins;
    }

    get key () {
        return this._key;
    }

    set key (key) {
        this._key = key;
    }

    get starTime () {
        return this._starTime;
    }

    set starTime (time) {
        this._starTime = time;
    }

    get devAllStar () {
        return this._devAllStar;
    }

    set devAllStar (time) {
        this._devAllStar = this.validateTimes(time);
    }

    get devNoStar () {
        return this._devNoStar;
    }

    set devNoStar (time) {
        this._devNoStar = this.validateTimes(time);
    }

    set playerStarTime (time) {
        this._playerStarTime = time;
    }

    get playerStarTime () {
        return this._playerStarTime;
    }

    validateTimes (time) {
        return time !== undefined ? time : 'Not Recorded';
    }

    get locked () {
        return this._locked;
    }

    set locked (isLocked) {
        this._locked = isLocked;
    }
}

export default Level;
