# Metronome Counting Task
## Purpose
The purpose of this project is to assist the collection of data for a research project PhD Candidate Thomas Anderson.

## Stack
- Front End
	- React
	- Redux
	- Node
- Back End
	- Express
	- Node
- Database (Not Yet Implemented)
	- Firebase (Recommended)
- Hosting (Not Yet Implemented)
	- Heroku (Recommended)

The project has a front end portion, which houses all of the UI and game logic. The front end is meant to transmit all of the data to the back end portion because although the front end can send requests directly to the database, the backend will be more useful in future iterations of this project when multiple different versions of the front end collect data and that data needs to be organized. It is recommended to use Firebase for the database due to the generosity of [Google Firebase's free-tier](https://firebase.google.com/pricing) and it is recommended to use Heroku for hosting due to [Heroku's Free Student Pack Promo](https://www.heroku.com/github-students).

## TODO
- [ ] Data Collection
	- [ ] Send Requests to Backend after every Trial
- [ ] Deployment
	- [ ] Deploy Frontend
	- [ ] Deploy Backend
- [ ] Parameterization
	- [ ] Generalize the codebase to allow variables and parameters to be changed
