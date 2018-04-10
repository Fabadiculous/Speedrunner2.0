class Level {
    constructor (key, starTime, devAllStar, devNoStar) {
        this.key = key;
        this.starTime = starTime;
        this.devAllStar = devAllStar;
        this.devNoStar = devNoStar;
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
        return this._devNoStarTime;
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
}

export default Level;
