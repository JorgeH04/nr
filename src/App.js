import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import Navigation from "./components/Navigation";
import { Main } from "./pages/main";
 

export function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <Routes>
 
          <Route path="/" element={<Main />} />
         
        </Routes>
      </main>
    </Router>
  );
}
