import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// 프로젝트에 리액트 라우터를 적용할 때는 src/index.js 파일에서 BrowserRouter 컴포넌트로 감싸면 됨

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
