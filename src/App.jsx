import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AppWrapper from './Components/AppWrapper';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Form from './Components/Form';
import Professions from './Components/Professions';
import Fruits from './Components/Fruits';

function App() {
	return (
		<div className="App">
			<AppWrapper>
				<BrowserRouter>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/profile" component={Profile} />
						<Route path="/form" component={Form} />
						<Route path="/professions" component={Professions} />
						<Route path="/fruits" component={Fruits} />
					</Switch>
				</BrowserRouter>
			</AppWrapper>
		</div>
	);
}

export default App;
