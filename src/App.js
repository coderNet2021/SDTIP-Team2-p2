import logo from './logo.svg';
import Products from './Product';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

import Filters from './Filters';

function App() {
  return (
    <div >
      <h2>kiddzie</h2>
     <Filters />
      <Products />
      
    </div>
  );
}

export default App;
