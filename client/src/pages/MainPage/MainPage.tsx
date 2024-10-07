import React from 'react'
import styles from './MainPage.module.css'
import NavBar from '../../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
export default function MainPage() {
	return (
		<div>
			<NavBar />
			<Outlet/>
		</div>
	)
}
