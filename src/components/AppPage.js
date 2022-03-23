import React from "react";
import "../App.css";

function AppPage() {
  return (
    <div className="app__page">
      <Sidebar />
      <SearchPage />
    </div>
  );
}

export default AppPage;
