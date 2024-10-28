import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import store from "./redux/store";
import { CookiesProvider } from "react-cookie";

const queryClient = new QueryClient({
  defaultOptions: { queries: { cacheTime: 0 } },
});
const persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <CookiesProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <ErrorBoundary>
              <App />
              {/* <ToastContainer
                  bodyClassName="custom-toast"
                  toastClassName={"toast-glass-effect"}
                  theme="colored"
                  position="top-center"
                  autoClose={5000}
                /> */}
            </ErrorBoundary>
          </QueryClientProvider>
        </BrowserRouter>
      </CookiesProvider>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
