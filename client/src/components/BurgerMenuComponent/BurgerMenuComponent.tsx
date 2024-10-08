	import React, { useContext } from 'react';
	import { listData, toolsData } from '../NavBar/navData';
	import styles from './BurgerMenuComponent.module.scss';
	import { UserContext } from '@/context/context';
import { Link } from 'react-router-dom';

	export default function BurgerMenuComponent() {
		const { burgerActiveMenu, setBurgerActiveMenu } = useContext(UserContext);
		return (
			<article
				className={`${styles.menu} ${burgerActiveMenu ? styles.active : ''}`}
				onClick={() => setBurgerActiveMenu(false)}
			>
				<div onClick={e => e.stopPropagation()} className={styles.menuContent}>
					<section className={`${styles.toolsBurger}`}>
						{toolsData.slice(0, 3).map(tools => (
							<Link to={tools.to} key={tools.id} className={` ${styles.toolsItem} `}>
								<img
									// className={` ${styles.toolsItem} `}
									src={tools.src}
									alt={tools.alt}
								></img>
							</Link>
						))}
					</section>
					<section>
						<ul>
							{listData.map(item => (
								<li className={`${styles.list} ${styles.items}`} key={item.id}>
									{item.text}
								</li>
							))}
						</ul>
					</section>
				</div>
				<svg
					className={styles.svg}
					onClick={() => setBurgerActiveMenu(!burgerActiveMenu)}
					version='1.0'
					xmlns='http://www.w3.org/2000/svg'
					width='30.000000pt'
					height='30.000000pt'
					viewBox='0 0 78.000000 78.000000'
					preserveAspectRatio='xMidYMid meet'
				>
					<g
						transform='translate(0.000000,78.000000) scale(0.100000,-0.100000)'
						fill='none'
						stroke='none'
					>
						<path d='M202 578 c-22 -22 -12 -43 60 -115 l72 -73 -72 -73 c-72 -72 -82 -93 -60 -115 22 -22 43 -12 115 60 l73 72 73 -72 c72 -72 93 -82 115 -60 22 22 12 43 -60 115 l-72 73 72 73 c72 72 82 93 60 115 -22 22 -43 12 -115 -60 l-73 -72 -73 72 c-72 72 -93 82 -115 60z' />
					</g>
				</svg>
			</article>
		);
	}
