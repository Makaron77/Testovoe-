import './App.css';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { useAuth } from './hooks/useAuth';

function App() {
	const auth = useAuth();

	return (
		<Routes>
			{auth ? (
				<>
					<Route path='/' element={<MainPage />} />
					<Route path='*' element={<Navigate to='/' />} />{' '}
				</>
			) : (
				<>
					<Route path='/login' element={<LoginPage />} />
					<Route path='*' element={<Navigate to='/login' />} />{' '}
				</>
			)}
		</Routes>
	);
}

export default App;
