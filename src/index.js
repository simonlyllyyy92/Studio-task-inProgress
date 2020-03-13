import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./store/reducer"

import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

//Configure Redux Store
const store = createStore(rootReducer)

//Add provider outside the root Component
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
)

serviceWorker.unregister()
