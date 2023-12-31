'use strict';
console.log('script.js file was loaded');

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }

    wasExpensive() {
        return this.budget > 100000000;
    }
}

// const brangu = new Movie('Epinis Brangumas', 'Saulius Dyrikas', 150000000);
// const papigiai = new Movie('NeEpinis Pigumas', 'Petras Dykuolis', 1000000);

// console.log('Ar filmas buvo brangus?', brangu.wasExpensive()); //  true
// console.log('Ar filmas buvo brangus?', papigiai.wasExpensive()); // false