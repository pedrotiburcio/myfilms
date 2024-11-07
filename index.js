import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import 'dotenv/config';

// Creating an express app and setting the port to 3000
const app = express();
const port = 3000;

// Setting my API Key to make requests
const myAPIKey = process.env.API_KEY;

// Variables to store films and errors if they occur
let films = [];
let errorMessage = "";

//Setting the path of static files
app.use(express.static("public"));

//Setting the body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Rendering the home page
app.get("/", (req, res) => {
    res.render("index.ejs", {films: films});
})

// Making a get request using axios to the omdb api and hadling errors
app.post("/submit", async (req, res) => { 
    const film = req.body.film;
    // Check if the user typed a film or series
    if (!film) {
        errorMessage = "Please, enter the film or series you want to search for.";
        res.render("index.ejs", { films: [], error: errorMessage });
        return; // Prevents the rest of the function from executing
    }

    try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${myAPIKey}&s=${film}`);
        // If omdb api doesn't return a valid response
        if (response.status !== 200) {
            throw new Error(`Error: API returned status code ${response.status}.`);
        }
        // If omdb api find at least one movie or series
        if(response.data.Response === "True") {
            films = response.data.Search;
        }
        else {
            films = [];
            errorMessage = `No films or series were found with this title: "${film}"`;
        }
    } catch(error) {
        errorMessage = error;
    } finally {
        res.render("index.ejs", {films: films, error: errorMessage});
    }
})

// Starting the server on port 3000
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})