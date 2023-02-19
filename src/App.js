// import './App.css';
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import store from "./redux/store";
import AddPost from "./components/dashboard/AddPost";
import BlogList from "./components/dashboard/BlogtList";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="add-post" element={<AddPost />} />
            <Route path="blog-list" element={<BlogList />} />
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
