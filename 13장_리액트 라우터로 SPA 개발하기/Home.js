import { Link } from 'react-router-dom';

// Link 컴포넌트를 통해, 다른 페이지로 이동하는 링크 보여주기
// <Link to="경로">링크 이름</Link> 형식으로 Link 컴포넌트 사용
// Link 컴포넌트는 a 태그와 달리 페이지를 새로 불러오는 것을 막고 History API를 통해 브라우저 주소의 경로만 바꾸는 기능이 내장되어 있음

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지</p>
      <ul>
        <li>
          <Link to="/about">소개</Link>
          {/* Home 페이지에서 About 페이지로 이동할 수 있도록 함 */}
        </li>
        <li>
          <Link to="/profiles/chocolate">초콜릿의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/strawberry">딸기의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재하지 않는 프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
