import React from 'react';
import ReactDOM from 'react-dom';
import './styled.js';
import TodoList from './creationtodolist/TodoList';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider} from '@emotion/react';
import { theme } from "./theme";
import {HomeBody} from './styled';


ReactDOM.render(
  <React.StrictMode>
  <HomeBody>
     <ThemeProvider theme={theme}>
    <TodoList />
    </ThemeProvider></HomeBody>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
