import React, { useContext, useState } from 'react';
import styles from './NavBar.module.scss';
import { listData, toolsData } from './navData';
import BurgerMenuComponent from '../BurgerMenuComponent/BurgerMenuComponent';
import { UserContext } from '@/context/context';
import { Link } from 'react-router-dom';
export default function NavBar() {
	const { burgerActiveMenu, setBurgerActiveMenu } = useContext(UserContext);
	const [isFocusedInput, setIsFocusedInput] = useState(false);
	const [activeItem, setActiveItem] = useState(null);
	const handleItemClick = (id) => {
		setActiveItem(id); 
	};

	return (
		<article className={styles.container}>
			<section className={styles.logo}>HarmonyHR</section>
			<section className={styles.list}>
				<ul>
					{listData.map(item => (
						<Link
							to={item.to}
							className={activeItem === item.id ? styles.activeItem : ''}
							onClick={() => handleItemClick(item.id)}
							key={item.id}
						>
							{item.text}
						</Link>
					))}
				</ul>
			</section>
			<section className={styles.search}>
				<input
					type='text'
					onFocus={() => setIsFocusedInput(true)}
					onBlur={() => setIsFocusedInput(false)}
				/>
				{!isFocusedInput && (
					<div className={styles.searchElement}>
						<img src='images/search.svg' alt='search' />
						<p>Search</p>
					</div>
				)}
			</section>
			<section className={styles.tools}>
				{toolsData.map(tools => (
					<img
						className={styles.toolsItem}
						key={tools.id}
						src={tools.src}
						alt={tools.alt}
					></img>
				))}
				<img
					className={styles.toolsItem}
					onClick={() => setBurgerActiveMenu(!burgerActiveMenu)}
					src='images/burgerMenu.svg'
					alt='burgerMenu'
				/>
				<section className={styles.burgerComponent}>
					<BurgerMenuComponent />
				</section>
			</section>
		</article>
	);
}
