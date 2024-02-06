class Movie{
    constructor(title,studio,ratings = "PG"){
        this.title = title;
        this.studio = studio;
        this .ratings = ratings;
    }
    static getPG(Movies){
        var res = Movies.filter((ele)=>ele.ratings ==="PG")
        return res;
        
    }

}

//a.Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
var Movie1 = new Movie("Batman","pvr","R");
console.log(Movie1);

//b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
var Movie2 = new Movie("Superman","Stark Movies");
console.log(Movie2);
//c.Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
var Movie3 = [new Movie("Ironman","Marvel Studios1","R"),
new Movie("Thor","Marvel Studios2","PG"),
new Movie("HULK","Marvel Studios3","PG-13"),
new Movie("Avengers","Marvel Studios1","U")];
console.log(Movie.getPG(Movie3));

//d.Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
var Movie4 = new Movie("Casino Royale","Eon Productions","PG13");
console.log(Movie4);