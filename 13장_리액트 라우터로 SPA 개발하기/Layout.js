import { Outlet, useNavigate } from 'react-router-dom';

// 중첩된 라우트와 Outlet은 페이지들이 공통적으로 보여줘야 하는 레이아웃이 있을 때 유용
// Header 컴포넌트를 따로 만들고 각 페이지 컴포넌트에서 재사용할 수도 있지만, 이렇게 중첩된 라우트와 Outlet을 활용해서도 구현 가능

const Layout = () => {
  const navigate = useNavigate();
  // useNavigate는 Link 컴포넌트를 사용하지 않고 다른 페이지로 이동해야 하는 상황에 사용하는 Hook

  const goBack = () => {
    navigate(-1);
  };
  // 이전 페이지로 이동
  // navigate 함수를 사용할 때 파라미터가 숫자 타입이라면 앞으로 가거나 뒤로 감
  // navigate(-1) -> 뒤로 한 번 감 / navigate(-2) -> 뒤로 두 번 감 / navigate(1) -> 앞으로 한 번 감

  const goArticles = () => {
    navigate('/articles', { replace: true });
  };
  // articles 경로로 이동
  // replace 옵션을 사용하면 페이지를 이동할 때 현재 페이지를 페이지 기록에 남기지 않음

  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
