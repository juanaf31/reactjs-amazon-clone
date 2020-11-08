import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CheckOut from './CheckOut';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
	const [{},dispatch] = useStateValue();
	useEffect(()=>{
		auth.onAuthStateChanged(authUser=>{
			if(authUser){
				dispatch({
					type:'SET_USER',
					user:authUser
				});
			}else{
				dispatch({
					type:'SET_USER',
					user:null
				});
			}
		})
	},[])
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route path="/login">
						<Login/>
					</Route>
					<Route path="/checkout">
						<Header />
						<CheckOut />
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
