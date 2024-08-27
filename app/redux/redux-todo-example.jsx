var redux = require('redux');

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: {}
};

var reducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.searchText
            }
        default:
            return state;
    }    
};

var store = redux.createStore(reducer, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f));
console.log('redux-todo-example', store.getState())


const subscription$ = store.subscribe((state) => {
    var state = store.getState();

    console.log('state', state)

    document.getElementById('rootApp').innerHTML = state.searchText;
})

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'work'
})
console.log('should be new searchText', store.getState())