import {
  Routes,
  Route,
} from "react-router";
import Css from './pages/Css'

import Nav from './components/Nav'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Css />}>
          {/* <Route index element={<Box />} /> */}
          {/* <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
        </Route>
    </Routes>
    </>
  );
}

export default App;
