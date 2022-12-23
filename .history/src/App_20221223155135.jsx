import React, { useRoutes } from 'react-router-dom';
import routes from './router';

function App() {
  return (
    <div style={{ width: '100%', height: '100%' }} className="App">
      {
        useRoutes(routes)
      }
    </div>
  );
}

export default App;
