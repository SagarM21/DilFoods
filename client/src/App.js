import logo from "./logo.svg";
import "./App.css";
import "bootstrap";
import "bootstrap/js/dist/dropdown";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import OrderScreen from "./screens/OrderScreen";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<BrowserRouter>
				<Route path='/' exact component={Home} />
				<Route path='/cart' exact component={CartScreen} />
				<Route path='/register' exact component={Register} />
				<Route path='/login' exact component={Login} />
				<Route path='/orders' exact component={OrderScreen} />
			</BrowserRouter>
		</div>
	);
}

export default App;
