import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import serviceManageForm from 'store/form/reducers';
import serviceOpenAdditionalMenu from './additionalMenu/reducers';
import serviceSendState from './sendState/reducer';

const reducers = combineReducers({
  manageForm: serviceManageForm,
  sendState: serviceSendState,
  openAdditionalMenu: serviceOpenAdditionalMenu,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;