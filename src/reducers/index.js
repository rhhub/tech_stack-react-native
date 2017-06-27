import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});

// console.log(store.getState());
// { libraries: [] }

// Add following code to implement redux in react-native
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from './reducers';
//
// <Provider store={createStore(reducers)}>
//   <View />
// </Provider>
