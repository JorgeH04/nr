import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import Navigation from "./components/Navigation";
import { Main } from "./pages/main";
import { Crud } from "./pages/crud";
import { Statistics } from "./pages/statistics";
import { Expenses } from "./pages/expenses";


export function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <Routes>
 
          <Route path="/" element={<Main />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/expenses" element={<Expenses />} />


        </Routes>
      </main>
    </Router>
  );
}
