import { useParams } from 'react-router-dom';

// URL 파라미터는 주로 ID 또는 이름을 사용하여 특정 데이터를 조회할 때 사용함
// URL 파라미터는 useParams라는 Hook을 사용하여 객체 형태로 조회 가능

const data = {
  chocolate: {
    name: '초콜릿',
    description: '달달하다!',
  },
  strawberry: {
    name: '딸기',
    description: '싱싱하다!',
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필</p>
      )}
      {/* username URL 파라미터를 통하여 프로필을 조회한 뒤 프로필이 존재하지 않으면 '존재하지 않는 프로필' 문구를 보여주고, 존재한다면 프로필 정보를 보여줌 */}
    </div>
  );
};

export default Profile;
