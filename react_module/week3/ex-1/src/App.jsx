import useWindowSize from './hooks/useWindowSize';
import useScreenWidthRange from './hooks/useScreenWidthRange';
import { Small, Medium, Big } from './components/Avatar';

function App() {
  const { width, height } = useWindowSize();
  const isBigWidth = useScreenWidthRange(900, Infinity);
  const isMediumWidth = useScreenWidthRange(600, 899);
  const isSmallWidth = useScreenWidthRange(0, 599);

  return (
    <>
      <div>
        ({width}) X ({height})
      </div>
      <div>
        {isBigWidth && <Big />}
        {isMediumWidth && <Medium />}
        {isSmallWidth && <Small />}
      </div>
    </>
  );
}

export default App;
