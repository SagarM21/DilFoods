import logo from "./logo.svg";
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<BrowserRouter>
				<Route path='/' exact component={Home} />
				<Route path='/cart' exact component={CartScreen} />
			</BrowserRouter>
		</div>
	);
}

export default App;
