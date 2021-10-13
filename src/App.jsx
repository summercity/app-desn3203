import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AppWrapper from '../src/components/AppWrapper';
import Home from '../src/components/Home';
import Profile from '../src/components/Profile';
import Form from '../src/components/Form';
import Professions from '../src/components/Professions';
import Fruits from '../src/components/Fruits';

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
