import React from "react";
import { Routes, Route } from "react-router-dom";
import AppDrawer from "./components/AppDrawer";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const EpisodesPage = React.lazy(() => import("./pages/EpisodesPage"));
const CharactersPage = React.lazy(() => import("./pages/CharactersPage"));

function App() {
  return (
    <div>
      <React.Suspense>
        <AppDrawer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/episodes" element={<EpisodesPage />} />
            <Route path="/characters" element={<CharactersPage />} />
          </Routes>
        </AppDrawer>
      </React.Suspense>
    </div>
  );
}

export default App;
