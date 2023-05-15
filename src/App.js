import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const EsignatureApp = lazy(() => import("./projects/01-e-signature/EsignatureApp"));
const RandomizeColor = lazy(() => import("./projects/02-randomizeColor/RandomizeColor"));
const LikePhotoApp = lazy(() => import("./projects/03-likemyphoto/LikePhotoApp"));
const TestimonialsApp = lazy(() => import("./projects/04-testimonials/TestimonialsApp"));
const AlertApp = lazy(() => import("./projects/05-alert/AlertApp"));
const TemperatureApp = lazy(() => import("./projects/06-TemperatureControl/TemperatureApp"));
const LigthAndDarkMode = lazy(() => import("./projects/07-light-dark-mode/LigthAndDarkMode"));
const SlideToUnlock = lazy(() => import("./projects/08-slide-to-unlock/SlideToUnlock"));
const SliderApp = lazy(() => import("./projects/09-slider/SliderApp"));
const HiddenSearchBar = lazy(() => import("./projects/10-hidden-searchbar/HiddenSearchBar"));
const PopUpApp = lazy(() => import("./projects/11-popup/PopUpApp"));

const CovidStats = lazy(() => import("./moreprojects/covid-stats/CovidStatsApp"));
const FormValidation = lazy(() => import("./moreprojects/form-validation/FormValidation"));
const MealRecipe = lazy(() => import("./moreprojects/meal-recipe/MealRecipe"));
const ReactNavBar = lazy(() => import("./moreprojects/react-navbar/Navbar"));
const TodoList = lazy(() => import("./moreprojects/todo-list/TodoListApp"));

function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/esignature" element={<EsignatureApp />} />
            <Route path="/randomizecolor" element={<RandomizeColor />} />
            <Route path="/likephotoapp" element={<LikePhotoApp />} />
            <Route path="/testimonialsapp" element={<TestimonialsApp />} />
            <Route path="/alertapp" element={<AlertApp />} />
            <Route path="/temperatureapp" element={<TemperatureApp />} />
            <Route path="/ligthanddarkmode" element={<LigthAndDarkMode />} />
            <Route path="/slidetounlock" element={<SlideToUnlock />} />
            <Route path="/sliderapp" element={<SliderApp />} />
            <Route path="/hiddensearchbar" element={<HiddenSearchBar />} />
            <Route path="/randomizepopupappcolor" element={<PopUpApp />} />

            <Route path="/covid-stats" element={<CovidStats />} />
            <Route path="/form-validation" element={<FormValidation />} />
            <Route path="/meal-recipe" element={<MealRecipe />} />
            <Route path="/react-navbar" element={<ReactNavBar />} />
            <Route path="/todo-list" element={<TodoList />} />
            
            <Route path="/" element={<div>
              <h2>Welcome to the homepage</h2>
              <p>Please select an app to continue:</p>
              <ul>
                <li>
                  <Link to="/esignature">Esignature</Link>
                </li>
                <li>
                  <Link to="/randomizecolor">Randomize Color</Link>
                </li>
                <li>
                  <Link to="/likephotoapp">Like my photo</Link>
                </li>
                <li>
                  <Link to="/testimonialsapp">Testimonial</Link>
                </li>
                <li>
                  <Link to="/alertapp">Alert app</Link>
                </li>
                <li>
                  <Link to="/temperatureapp">Temperature app</Link>
                </li>
                <li>
                  <Link to="/ligthanddarkmode">Light and dark</Link>
                </li>
                <li>
                  <Link to="/slidetounlock">Slide Unlock</Link>
                </li>
                <li>
                  <Link to="/sliderapp">Slider</Link>
                </li>
                <li>
                  <Link to="/hiddensearchbar">Hidden search bar</Link>
                </li>
                <li>
                  <Link to="/covid-stats">Covid stats</Link>
                </li>
                <li>
                  <Link to="/form-validation">Form Validation</Link>
                </li>
                <li>
                  <Link to="/meal-recipe">Meal recipe</Link>
                </li>
                <li>
                  <Link to="/react-navbar">React NavBar</Link>
                </li>
                <li>
                  <Link to="/todo-list">Todo List</Link>
                </li>
              </ul>
            </div>} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
