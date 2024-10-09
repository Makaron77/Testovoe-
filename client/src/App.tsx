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
import PersonalPage from './pages/ListPages/InfoPage/ListInfoPages/PersonalPage/PersonalPage';
import JobPage from './pages/ListPages/InfoPage/ListInfoPages/JobPage/JobPage';
import TimeOffPage from './pages/ListPages/InfoPage/ListInfoPages/TimeOffPage/TimeOffPage';
import EmegrencyPage from './pages/ListPages/InfoPage/ListInfoPages/EmegrencyPage/EmegrencyPage';
import DocumentsPage from './pages/ListPages/InfoPage/ListInfoPages/DocumentsPage/DocumentsPage';
import NotesPage from './pages/ListPages/InfoPage/ListInfoPages/NotesPage/NotesPage';
import BenefitsPage from './pages/ListPages/InfoPage/ListInfoPages/BenefitsPage/BenefitsPage';
import TrainingPage from './pages/ListPages/InfoPage/ListInfoPages/TrainingPage/TrainingPage';
import AssetsPage from './pages/ListPages/InfoPage/ListInfoPages/AssetsPage/AssetsPage';
import MorePage from './pages/ListPages/InfoPage/ListInfoPages/MorePage/MorePage';

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
						<Route path='info' element={<InfoPage />}>
							<Route path='personal' element={<PersonalPage />} />
							<Route path='job' element={<JobPage />} />
							<Route path='timeOf' element={<TimeOffPage />} />
							<Route path='emergency' element={<EmegrencyPage />} />
							<Route path='documents' element={<DocumentsPage />} />
							<Route path='notes' element={<NotesPage />} />
							<Route path='benefits' element={<BenefitsPage />} />
							<Route path='training' element={<TrainingPage />} />
							<Route path='assets' element={<AssetsPage />} />
							<Route path='more' element={<MorePage />} />
						</Route>

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
