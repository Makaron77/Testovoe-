import './App.css';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { useAuth } from './hooks/useAuth';
import HomePage from './pages/ListPages/HomePage/HomePage';
import InfoPage from './pages/ListPages/InfoPage/InfoPage';
import PeoplePage from './pages/ListPages/PeoplePage/PeoplePage';
import HiringPage from './pages/ListPages/HiringPage/HiringPage';
import ReportsPage from './pages/ListPages/ReportsPage/ReportsPage';
import FilesPage from './pages/ListPages/FilesPage/FilesPage';
import { useEffect } from 'react';

function App() {
	const auth = useAuth();
	const location = useLocation(); 

	useEffect(() => {

		if (auth) {
			sessionStorage.setItem('currentPath', location.pathname);
		}
	}, [auth, location.pathname]);

	const redirectPath = sessionStorage.getItem('currentPath') || '/home';


	return (
		<Routes>
			{auth ? (
				<>
					<Route path='/' element={<MainPage />}>
						<Route path='home' element={<HomePage />} />
						<Route path='info' element={<InfoPage />} />
						<Route path='people' element={<PeoplePage />} />
						<Route path='hiring' element={<HiringPage />} />
						<Route path='reports' element={<ReportsPage />} />
						<Route path='files' element={<FilesPage />} />
					</Route>

					<Route path='*' element={<Navigate to={redirectPath || '/home'} />} />
				</>
			) : (
				<>
					<Route path='/login' element={<LoginPage />} />
					<Route path='*' element={<Navigate to='/login' />} />
				</>
			)}
		</Routes>
	);
}

export default App;
