import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import cardsReducer from './cards';
import studyReducer from './studySessions';
import taskReducer from './tasks';
import quizReducer from './quiz';
import questionReducer from './triviaQuestions';

const rootReducer = combineReducers({
  session,
  cards: cardsReducer,
  study: studyReducer,
  tasks: taskReducer,
  quizzes: quizReducer,
  questions: questionReducer,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
