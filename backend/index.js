const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors({
    origin: '*'
}));

let response = null;

axios.get('https://api.spotify.com/v1/recommendations', {
    params: {
        market: 'ES',
        seed_artists: '43ZHCT0cAZBISjO8DG9PnE',
        seed_genres: 'classical,country',
        seed_tracks: '1wQDiRoDF4Y0SGLHG8BdVi'
    },
    headers: {
        'Authorization': 'Bearer BQDWXs4qo1jSu76ubhvwUGfCTzzR3AwEkVRk9zkiCqxmbenEaeLme-c-20inIPN38uXX2SyBgVFib2uyWpETc-AHbhP9R_uC5K6eMO7YdsEe3P-K6a4'
    }
})
    .then(res => {
        console.log(res.data)
        response = res.data; // Set the response variable when request succeeds
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Define route to handle requests
app.get('/', (req, res) => {
    // Check if response is available
    if (response !== null) {
        res.send(response);
    } else {
        res.send('Response not available yet. Please try again later.');
    }
});

app.post('/', (req, res) => {
    // Check if response is available
    if (response !== null) {
        res.send(response);
    } else {
        res.send('Response not available yet. Please try again later.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
