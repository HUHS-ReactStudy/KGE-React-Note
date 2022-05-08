import { Route, Routes } from 'react-router-dom';
import About from './About';
import Article from './Article';
import Articles from './Articles';
import Home from './Home';
import Layout from './Layout';
import Login from './Login';
import MyPage from './MyPage';
import NotFound from './NotFound';
import Profile from './Profile';

// 리액트 라우터로 싱글 페이지 애플리케이션을 만들 수 있음
// 싱글 페이지 애플리케이션 -> html은 한 번만 받아와서 웹 애플리케이션을 실행시킨 후, 이후에는 필요한 데이터만 받아와서 화면에 업데이트하는 것

// yarn add react-router-dom 으로 리액트 라우터 라이브러리 설치

// Route 컴포넌트를 통해, 특정 경로에 따라 원하는 컴포넌트를 보여줌
// <Route path="주소규칙" element={보여줄 컴포넌트 JSX} /> 형식으로 Route 컴포넌트 사용
// Route 컴포넌트는 Routes 컴포넌트 내부에서 사용해야 함

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="/" element={<Home />} /> 와 같은 의미 */}

        <Route path="/about" element={<About />} />

        <Route path="/profiles/:username" element={<Profile />} />
        {/* URL 파라미터는 이렇게 경로에 :를 사용하여 설정함. /profiles/:username/:field 처럼 URL 파라미터 여러 개도 가능 */}
      </Route>
      {/* Home, About, Profile 페이지 상단에 헤더를 보여줌 */}

      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      {/* 중첩된 라우트 */}
      {/* 게시글 목록 페이지(/articles)에서 게시글(/articles/:id)을 열었을 때 게시글 하단에 목록을 보여줌 */}

      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />

      <Route path="*" element={<NotFound />} />
      {/* *는 아무 텍스트나 매칭한다는 뜻. 상단에 위치하는 라우트들의 규칙을 모두 확인한 후, 일치하는 라우트가 없다면 이 라우트가 화면에 나타남. */}
    </Routes>
  );
};

export default App;
