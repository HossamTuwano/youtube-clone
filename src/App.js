import RecommendedVideos from "./components/RecommendedVideos";
import Sidebar from "./components/Sidebar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

// import SearchIcon from "./SearchIcon"; //same thing as top
// import VideoCallIcon from "./VideoCallIcon"; //change this to "@material-ui/icons/Notifications"
// import AppsIcon from "./AppsIcon"; // samething as top
// import NotificationsIcon from "./NotificationsIcon"; // samething as top
// import Avatar from "./Avatar";

// import a MenuIcone from material-ui/icons/search
import "./App.css";
import Header from "./components/Header";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/search/:searchTerm"
            element={
              <div className="app__page">
                <Sidebar />
                <SearchPage />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="app__page">
                <Sidebar />
                <RecommendedVideos />
              </div>
            }
          />
        </Routes>
        {/* 
        <Routes>
          <Route path="/search/:searchTerm" element={<Sidebar />}>
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Routes> */}
      </Router>
      {/* <Header />

      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div> */}
    </div>
  );
}

export default App;
