import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootRedcer from "./reducers/rootReducer";

const store = createStore(rootRedcer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
