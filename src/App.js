import "./App.css";
// import About from "./components/About";
import AlertMessage from "./components/AlertMessage";
import ColorPicker from "./components/ColorPicker";
import NavigationBar from "./components/NavigationBar";
import TextForm from "./components/TextForm";
import { useState } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("#ffffff");
  document.getElementsByTagName("body")[0].style.backgroundColor = color;

  const toggleMode = () => {
    if (mode === "light") {
      setMode("rainbow");
      setAlert({
        type: "success",
        message: "Changed to rainbow mode",
      });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    } else {
      setMode("light");
      setAlert({
        type: "success",
        message: "Changed to light mode",
      });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }
  };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <>
  //         <ColorPicker mode={mode} color={color} changeColor={setColor} />
  //         <TextForm
  //           mode={mode}
  //           toggleMode={toggleMode}
  //           heading="Hey Suryadeep Enter some text"
  //         />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  // ]);
  return (

    // <Router>
      <>
      <NavigationBar
        mode={mode}
        toggleMode={toggleMode}
        title="Hello Suryadeep"
        about="about"
      />
      <AlertMessage alert={alert} />
      <ColorPicker mode={mode} color={color} changeColor={setColor} />
          <TextForm
            mode={mode}
            toggleMode={toggleMode}
            heading="Hey Suryadeep Enter some text"
          />
      {/* <Routes>
        <Route exact path="/" element={<>
 
        </>}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes> */}
    {/* </Router> */}
    </>
  );
}

export default App;
