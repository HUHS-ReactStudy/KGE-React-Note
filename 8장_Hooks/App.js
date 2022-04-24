import { useState } from 'react';
import Average2 from './useCallback';
import Average from './useMemo';
import Counter2 from './useReducer';
import Info2 from './useReducer2';
import Counter from './useState';
import Info from './useState2&useEffect';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* useState */}
      <Counter />

      {/* useState2&useEffect */}
      <div>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? '숨기기' : '보이기'}
        </button>
        <hr />
        {visible && <Info />}
        {/* 숨기기 버튼을 누르면 컴포넌트가 보이지 않고, 보이기 버튼을 누르면 컴포넌트가 다시 나타남 */}

        {/* useReducer */}
        <Counter2 />

        {/* useReducer2 */}
        <Info2 />

        {/* useMemo */}
        <Average />

        {/* useCallback */}
        <Average2 />
      </div>
    </>
  );
};

export default App;
