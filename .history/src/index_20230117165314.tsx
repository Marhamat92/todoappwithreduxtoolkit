import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

//provider is a component that we get from react-redux, it's a wrapper component that we use to wrap our app component, it takes a prop called store, and we pass in our store to it, this is how we connect our store to our app
