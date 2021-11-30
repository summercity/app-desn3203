import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AppWrapper from './Components/AppWrapper';
import Home from './Components/Home';
// import Profile from './Components/Profile';
import Form from './Components/Form';
import Contact from './Components/Contact';
import Profession from './Components/Profession';
import Fruits from './Components/Fruits';
import ArrayManipulation from './Components/ArrayManipulation';

function App() {
	return (
		<div className="App">
			<AppWrapper>
				<BrowserRouter>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route
							path="/profession"
							exact
							component={Profession}
						/>
						<Route path="/form" component={Form} />
						<Route path="/fruits" component={Fruits} />
						<Route
							path="/array-manipulation"
							component={ArrayManipulation}
						/>
						<Route path="/contact" component={Contact} />
					</Switch>
				</BrowserRouter>
			</AppWrapper>
		</div>
	);
}

export default App;
