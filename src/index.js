import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"
import './index.css';
import MainNav from './components/MainNav';
import Home from './components/Home';
import Panel from './components/Panel';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  // uri: 'https://admin.picturingurbanrenewal.org/graphql/',
  uri: 'http://127.0.0.1:8000/graphql/',
  cache: new InMemoryCache()
});
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='panels' element={<MainNav />} >
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
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
