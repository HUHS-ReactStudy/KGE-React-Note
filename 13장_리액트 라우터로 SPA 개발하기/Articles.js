import { NavLink, Link, Outlet } from 'react-router-dom';

// NavLink 컴포넌트는 링크에서 사용하는 경로가 현재 라우트의 경로와 일치하는 경우 특정 스타일이나 CSS 클래스를 적용하는 컴포넌트
// { isActive: boolean }을 파라미터로 전달받는 함수 타입의 값 전달

const Articles = () => {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };

  return (
    <div>
      <Outlet />
      {/* 중첩된 라우트 사용을 위해 리액트 라우터에서 제공하는 Outlet 컴포넌트 사용 */}
      {/* Route의 children으로 들어가는 JSX 엘리먼트를 보여주는 역할 */}
      {/* Outlet 컴포넌트가 사용된 자리에 중첩된 라우트가 보여짐 */}

      <ul>
        <li>
          <NavLink
            to="articles/1"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 1
          </NavLink>
          {/* <Link to="/articles/1">게시글 1</Link> */}
        </li>

        <li>
          <NavLink
            to="articles/2"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 2
          </NavLink>
          {/* <Link to="/articles/2">게시글 2</Link> */}
        </li>

        <li>
          <NavLink
            to="articles/3"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 3
          </NavLink>
          {/* <Link to="/articles/3">게시글 3</Link> */}
        </li>
      </ul>
    </div>
  );
};

export default Articles;
