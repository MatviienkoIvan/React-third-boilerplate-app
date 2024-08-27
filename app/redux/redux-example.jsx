var redux = require("redux");

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();



//Subscribe to changes
const subscription$ = store.subscribe(() => {
  var state = store.getState();
  console.log("Name is ", state.name);
  document.getElementById("rootApp").innerHTML = state.name;
  console.log("New state ", store.getState());

  if (state.map.isFetching) {
    document.getElementById('rootApp').innerHTML = 'Loading...'
  } else if (state.map.url) {
    document.getElementById('rootApp').innerHTML = `<a href="${state.map.url}" target="_blank">View your location</a>`
  }
});

store.dispatch(actions.fetchLocation());


store.dispatch(actions.changeName('Andrew'));
store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));
store.dispatch(actions.addMovie("Mad Max", "Action"));
store.dispatch(actions.addMovie("Matrix", "Action"));
store.dispatch(actions.removeMovie(2));
store.dispatch(actions.changeName('Ivan'));
