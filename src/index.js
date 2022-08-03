import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"
import './index.css';
import App from './App';
import Home from './components/Home';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  // uri: 'https://admin.picturingurbanrenewal.org/graphql/',
  uri: 'http://127.0.0.1:8000/graphql/',
  cache: new InMemoryCache()
});
const root = ReactDOM.createRoot(document.getElementById('root'));

          // {/* <Route path='/' element={<Home />} /> */}
          // {/* <Route path='panel' element={<App />} /> */}

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path='/' />
            <Route index={true} element={<App />} />
            <Route path='test1' element={<Test1 />} />
            <Route path='test2' element={<Test2 />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
