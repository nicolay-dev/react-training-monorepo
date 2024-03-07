import { createRoot } from 'react-dom/client';
import { MyComponent } from './src/App';

const root = createRoot(document.getElementById('app'));

root.render(
  <>
    <MyComponent params='1'>
      Node
      <button>hola2</button>
    </MyComponent>
  </>
);
