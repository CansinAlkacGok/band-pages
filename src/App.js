import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import Vocals from './routes/Vocals';
import Guitar from './routes/Guitar';
import Drums from './routes/Drums';
import Bass from './routes/Bass';
import Manga from './routes/Manga'
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="vocals" element={<Vocals/>}/>
          <Route path="guitar" element={<Guitar/>}/>
          <Route path="drums" element={<Drums/>}/>
          <Route path="bass" element={<Bass/>}/>
          <Route index element = {<Manga />} /> {/* shared the path of parent route. its a default route.renders element that occupy outlet in home component. */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
