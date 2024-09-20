import React from 'react';
import styles from './NavBar.module.scss';
import { listData } from './navData';
export default function NavBar() {
	return (
		<article className={styles.container}>
			<section className={styles.logo}>HarmonyHR</section>
			<section className={styles.list}>
				<ul>
					{listData.map(item => (
						<li key={item.id}>{item.text}</li>
					))}
				</ul>
			</section>
			<section className={styles.search}>
				<input type='text' />
				<div className={styles.searchElement}>
					<img src='images/search.svg' alt='search' />
					<p>Search</p>
				</div>
			</section>
			<section className={styles.tools}>
				<img src='images/iconTools1.svg' alt='iconTools1' />
				<img src='images/iconTools2.svg' alt='iconTools2' />
				<img src='images/iconTools3.svg' alt='iconTools3' />
				<img src='images/avatarTools.svg' alt='avatarTools' />
				<img src='images/burgerMenu.svg' alt='burgerMenu' />
			</section>
		</article>
	);
}
