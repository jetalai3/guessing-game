class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.result = 0;
        this.setRange = this.setRange.bind(this);
        this.guess = this.guess.bind(this);
        this.lower = this.lower.bind(this);
        this.greater = this.greater.bind(this);
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.result = Math.ceil((this.max - this.min) / 2 + this.min);
    }

    guess() {
        return this.result;
    }

    lower() {
        this.max = this.result;
        this.result = Math.ceil((this.max - this.min) / 2 + this.min);
    }

    greater() {
        this.min = this.result;
        this.result = Math.ceil((this.max - this.min) / 2 + this.min);
    }
}

module.exports = GuessingGame;
