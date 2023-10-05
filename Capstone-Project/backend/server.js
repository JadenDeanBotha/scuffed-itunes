const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");


const { v4  } = require('uuid');

import helmet from "helmet";

// Use Helmet!
app.use(helmet());


//This will allow the backend to read data that is given in the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let saved = [];

app.get('/getSaved', (req, res) => {
  res.json({saved})
})

app.post('/save', (req, res) => {
 newObj = {
  id: v4(),
  info: req.body
 };

 saved.push(newObj)
 res.json({saved})
 console.log(newObj)
 console.log(saved)
})

app.delete('/delete/:id', (req, res) => {
  const projectId = req.params.id;
    const projectIndex = saved.findIndex(project => project.id === projectId);

    console.log(projectId)
    console.log(projectIndex)
    
    if (projectIndex === -1) {
        return res.status(404).send("Project not found");
    }
  
    saved.splice(projectIndex,1);
  //res.send(`The item was successfully deleted`)
    res.json({saved});
})

//This is the api endpoint to fetch all the music
app.post("/music", (req, res) => {
  let search = req.body.search;

  fetch(`https://itunes.apple.com/search?term=${search}&media=music&limit=100`)
    .then((response) => response.json())
    .then(
      (response) => {
        res.send(response);
      },
      (error) => {
        console.log(error);
      }
    );
});

//This is the api endpoint to fetch all the movies
app.post("/movie", (req, res) => {
  let search = req.body.search;

  fetch(`https://itunes.apple.com/search?term=${search}&media=movie&limit=100`)
    .then((response) => response.json())
    .then(
      (response) => {
        res.send(response);
      },
      (error) => {
        console.log(error);
      }
    );
});

//This is the api endpoint to fetch all the podcasts
app.post("/podcast", (req, res) => {
  let search = req.body.search;

  fetch(`https://itunes.apple.com/search?term=${search}&media=podcast&limit=100`)
    .then((response) => response.json())
    .then(
      (response) => {
        res.send(response);
      },
      (error) => {
        console.log(error);
      }
    );
});

//This is the api endpoint to fetch all the movies
app.post("/ebook", (req, res) => {
  let search = req.body.search;

  fetch(`https://itunes.apple.com/search?term=${search}&media=ebook&limit=100`)
    .then((response) => response.json())
    .then(
      (response) => {
        res.send(response);
      },
      (error) => {
        console.log(error);
      }
    );
});

//This is the api endpoint to fetch all the tv shows
app.post("/tvShow", (req, res) => {
  let search = req.body.search;

  fetch(`https://itunes.apple.com/search?term=${search}&media=tvShow&limit=100`)
    .then((response) => response.json())
    .then(
      (response) => {
        res.send(response);
      },
      (error) => {
        console.log(error);
      }
    );
});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});


