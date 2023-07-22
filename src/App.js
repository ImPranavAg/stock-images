import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryPage from './Pages/CategoryPage';
import Currentevents from './Pages/Currentevents';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Wallpapers from './Pages/Wallpapers';
import Threedrenders from './Pages/Threedrenders';
import Textures from './Pages/Textures';
import Experimental from './Pages/Experimental';
import Architecture from './Pages/Architecture';
import Nature from './Pages/Nature';
import Bussiness from './Pages/Bussiness';
import Fashion from './Pages/Fashion';
import Film from './Pages/Film';
import Food from './Pages/Food';
import Health from './Pages/Health';
import People from './Pages/People';
import Interiors from './Pages/Interiors';
import Street from './Pages/Street';
import Travel from './Pages/Travel';
import Animals from './Pages/Animals';
import Spiritual from './Pages/Spiritual';
import NotFound from './Pages/NotFound';
import Banner from './Components/Banner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/banner" element={<Banner />} /> */}
      </Routes>
      {/* <Banner /> */}
      <Routes>
        <Route path="/category" element={<CategoryPage />} />

        <Route  element={<CategoryPage />} />
        <Route  element={<Banner />} />
        <Route path="/category/currentevents" element={<Currentevents />} />
        <Route path="/category/editorial" element={<Fashion />} />
        <Route path="/category/wallpapers" element={<Wallpapers />} />
        <Route path="/category/3drenders" element={<Threedrenders />} />
        <Route path="/category/textures" element={<Textures />} />
        <Route path="/category/experimental" element={<Experimental />} />
        <Route path="/category/architecture" element={<Architecture />} />
        <Route path="/category/nature" element={<Nature />} />
        <Route path="/category/bussiness" element={<Bussiness />} />
        <Route path="/category/fashion" element={<Fashion />} />
        <Route path="/category/film" element={<Film />} />
        <Route path="/category/food" element={<Food />} />
        <Route path="/category/health" element={<Health />} />
        <Route path="/category/people" element={<People />} />
        <Route path="/category/interiors" element={<Interiors />} />
        <Route path="/category/street" element={<Street />} />
        <Route path="/category/travel" element={<Travel />} />
        <Route path="/category/animals" element={<Animals />} />
        <Route path="/category/spiritual" element={<Spiritual />} />
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      .
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
