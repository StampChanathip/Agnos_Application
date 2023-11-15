import { Outlet, Routes, Route } from "react-router-dom";
import "./App.css";
import FingerQuestion from "./Components/Finger/FingerQuestion";
import StomachQuestion from "./Components/Stomach/StomachQuestion";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Question />}>
        <Route index element={<StomachQuestion />} />
        <Route path="hand" element={<FingerQuestion />} />
      </Route>
    </Routes>
  );
}

export function Question() {
  return (
    <div className="flex flex-col items-center py-20">
      <Outlet />
    </div>
  );
}
