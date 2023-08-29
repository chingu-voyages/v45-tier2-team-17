import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Summary from "./pages/Summary/Summary";
import Explore from "./pages/Explore/Explore";
import ErrorNotFound from "./pages/ErrorNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
