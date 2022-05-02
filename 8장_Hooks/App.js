import { useState } from 'react';
import Average2 from './5_useCallback';
import Average from './4_useMemo';
import Counter2 from './3_useReducer';
import Info2 from './3_useReducer2';
import Counter from './1_useState';
import Info from './2_useState2&useEffect';
import Average3 from './6_useRef';

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

        {/* useRef */}
        <Average3 />
      </div>
    </>
  );
};

export default App;
