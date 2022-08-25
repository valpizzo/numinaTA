# numinaTA
Numina Take Home Assessment

<!-- DOCKER INSTRUCTIONS -->

## How to start the docker container

### Build the docker image
Navigate to /numinata and run the following command in the terminal:
 docker build -t numina .

### Start the app container
Run the following command in the terminal:
 docker run -dp 3001:3001 numina

### Open the App
Open numinaFE in the browser, which will communciate with the API in this docker container

<!-- GETTING API DATA FROM THE COMMAND LINE -->

## GET the Cumulative Sum (by hour) for a Specific Object Class Using the /cumulativeSum route
### GET the Cumulative Sum (by hour) for Pedestrians
Run the following command in the terminal:
  curl http://localhost:3001/cumulativeSum/pedestrian

### GET the Cumulative Sum (by hour) for Bicycles
Run the following command in the terminal:
  curl http://localhost:3001/cumulativeSum/bicycle

## GET the Track Points for a Given Track ID Using the /trackPoints route
### Example: GET the Track Points for Track ID: 06a37636be994e008f7ebd62a3a61a4d
<!-- Use json_pp to print the data in a more readable format -->
Run the following command in the terminal:
  curl http://localhost:3001/trackPoints/06a37636be994e008f7ebd62a3a61a4d | json_pp

