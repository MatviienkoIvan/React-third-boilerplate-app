var nextHobbyId = 1;
var nextMovieId = 1;
// Name reducer
export var nameReducer = (state = "Anonymous", action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return action.name;
    default:
      return state;
  }
};

// Hobbies reducer
export var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_HOBBY":
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby,
        },
      ];
    case "REMOVE_HOBBY":
      return state.filter((hobby) => hobby.id !== action.id);
    default:
      return state;
  }
};

// Movies reducer action generators
export var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case "REMOVE_MOVIE":
      return state.filter((movie) => movie.id !== action.id);

    case "ADD_MOVIE":
      return [
        ...state,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre,
        },
      ];
    default:
      return state;
  }
};

export var mapReducer = (
  state = { isFetching: false, url: undefined },
  action
) => {
  switch (action.type) {
    case "START_LOCATION_FETCH":
      return {
        isFetching: true,
        url: undefined,
      };
    case "COMPLETE_LOCATION_FETCH":
      return {
        isFetching: false,
        url: action.url,
      };
    default:
      return state;
  }
};
