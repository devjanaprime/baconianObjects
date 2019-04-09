// movie objects
let movies = [
    {
        title: 'The Matrix',
        year: 1999,
        director: 'The Wachowskis',
        starring:  [ 'Keanu Reeves', 'Carrie Ann Moss', 'Lawrence Fishburn' ]
    },
    {
        title: 'A Star is Born',
        year: 2018,
        director: 'Bradley Cooper',
        starring: [ 'Bradley Cooper', 'Lady Gaga', 'Sam Elliot' ]
    },
    {
        title: 'Big Lebowski',
        year: 1998,
        director: 'Cohen Brothers',
        starring: [ 'Jeff Bridges', 'John Goodman', 'Steve Buscemi', 'Flea' ]
    },
    {
        title: 'Legally Blonde',
        year: 2001,
        director: 'Robert Luketic',
        starring: [ 'Reese Witherspoon', 'Luke Wilson' ]
    },
    {
        title: 'Space Jam',
        year: 1996,
        director: 'Joe Poiefg',
        starring: [ 'Michael Jordan', 'Bugs Bunny', 'Charles barkley' ]
    },
    {
        title: 'Fargo',
        year: 1996,
        director: 'Cohen Brothers',
        starring: [ 'William H Macy', 'Steve Buscemi', 'Francis McDormand' ]
    },
    {
        title: 'Airforce One',
        year: 1997,
        director: 'Wolfgang Peterson',
        starring: [ 'Harrison Ford', 'Harrison Ford', 'Harrison Ford' ]
    }
];

let avengers = {
    title: 'Marvel\'s The Avengers',
    year: 2012,
    director: 'Joss Whedon',
    starring: [ 'Chris Evans', 'Scarlett JJoohhaanneessoonn', 'Robert Downey Jr', 'Mark Ruffalo', 'Tom Hiddelston' ]
}

movies.push( avengers );

function oldMovies(){
    let oldMovies = [];
    //loop thorugh movies
    for( let i=0; i<movies.length; i++){
        // check if "year" key is less than 2000
        if( movies[ i ].year < 2000 ){
            // if so, push into an oldMovies array
            oldMovies.push( movies[ i ] );
        }
    } // end for
    // return oldMovies as an array 
    return oldMovies;
} // end funk

function moviesStarring( actor ){
    let moviesWithActor = [];
    // loop through movies
    for( let i=0; i<movies.length; i++ ){
        // check each movie's .starring
        // if actor is in movie, push into moviesWithActor
        if( movies[ i ].starring.includes( actor ) ){
            moviesWithActor.push( movies[ i ] );
        }
    }
    // return moviesWithActor
    return moviesWithActor;
}