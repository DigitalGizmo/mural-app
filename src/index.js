import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"
import { GlobalProvider } from './context/GlobalState';
import './index.css';
import PanelParent from './components/PanelParent';
import Home from './components/Home';
import Panel from './components/Panel';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: 'https://mural-admin.digitalgizmo.com/graphql/',
  // uri: 'http://127.0.0.1:8000/graphql/',
  cache: new InMemoryCache()
});
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
      <GlobalProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='panels' element={<PanelParent />} >
              <Route path=':panelSlug' element={<Panel />} />
            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
