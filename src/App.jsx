import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AppWrapper from './components/AppWrapper';
import Home from './components/Home';
import Profile from './components/Profile';
import Form from './components/Form';
import Professions from './components/Professions';
import Fruits from './components/Fruits';

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
