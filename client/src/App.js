import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import TestComponent from "./views/TestComponent";
import Dashboard from "./views/Dashboard";
import Create from "./views/Create";
import Update from "./views/Update";
import Details from "./views/Details";
import Dashboard2 from "./views/Dashboard2";

function App() {
  return (
    <div>
      <BrowserRouter>
      <h1>Song FS Demo</h1>
      <Link to="/test/api">Test backend </Link> |
      <Link to="/songs">Songs Dashbaord </Link> |
      <Link to="/songs2">Songs Dashbaord2 </Link> |
      <Link to="/songs/new">Create new song </Link> |


      <Routes>
        <Route path="/test/api" element={ <TestComponent /> } />
        <Route path="/songs" element={ <Dashboard /> } />
        <Route path="/songs2" element={ <Dashboard2 /> } />
        <Route path="/songs/new" element={ <Create /> } />
        <Route path="/songs/:id" element={ <Details /> } /> 
        <Route path="/songs/:id/edit" element={ <Update /> } /> 

      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
