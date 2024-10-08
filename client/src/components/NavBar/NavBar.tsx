import React, { useContext, useEffect, useState } from 'react';
import styles from './NavBar.module.scss';
import { listData, toolsData } from './navData';
import BurgerMenuComponent from '../BurgerMenuComponent/BurgerMenuComponent';
import { UserContext } from '@/context/context';
import { Link } from 'react-router-dom';
import { Col, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import ExidAvatarInputAntdComponent from '../ExidAvatarInputAntdComponent/ExidAvatarInputAntdComponent';

export default function NavBar() {
	const { burgerActiveMenu, setBurgerActiveMenu } = useContext(UserContext);
	const [isFocusedInput, setIsFocusedInput] = useState(false);
	const [activeItem, setActiveItem] = useState(
		sessionStorage.getItem('activeItem') || '1',
	);
	const { userData, setUserData } = useContext(UserContext);


	const handleItemClick = id => {
		sessionStorage.setItem('activeItem', id);
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
					/>
				))}
				<div className={styles.containerAvatar}>
					{userData.avatar ? (
						<div className={styles.avatar}>
							<ExidAvatarInputAntdComponent />
						</div>
					) : (
						// <img src={userData.avatar} alt='avatar' />
						<Col>
							<Spin indicator={<LoadingOutlined spin />} size='small' />
						</Col>
					)}
				</div>

				<img
					className={styles.burgerIcon}
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
