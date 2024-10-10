import React, { useContext, useState } from 'react';
import styles from './InfoPage.module.scss';
import { UserContext } from '@/context/context';
import { Col, Skeleton, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { InputSelectUIComponent } from '@/components/InputSelectUIComponent/InputSelectUIComponent';
import { Link, Outlet } from 'react-router-dom';
import { infoPageData } from './infoPageData';

export default function InfoPage() {
	const { userData } = useContext(UserContext);
	const [activeItemInfo, setActiveItemInfo] = useState(
		sessionStorage.getItem('activeItemInfo') || '1',
	);

	const handleItemClick = id => {
		sessionStorage.setItem('activeItemInfo', id);
		setActiveItemInfo(id);
	};

	return (
		<>
			<article className={styles.container}>
				<div className={styles.photo}>
					{userData.avatar ? (
						<img src={userData.avatar} alt='avatar' />
					) : (
						<Col className={styles.col}>
							<Spin
								className={styles.spin}
								indicator={<LoadingOutlined spin />}
								size='large'
							/>
						</Col>
					)}
				</div>

				<section className={styles.right}>
					<div className={styles.nameAndSettings}>
						<div className={styles.nameBlock}>
							{userData.name ? (
								<p>{userData.name}</p>
							) : (
								<Skeleton
									active
									title={false}
									paragraph={{ rows: 1 }}
									className={styles.uiSkeleton}
								/>
							)}
						</div>
						<div className={styles.settingsBlock}>
							<div className={styles.request}>
								<div className={styles.settings}>
									<InputSelectUIComponent />
								</div>
								<img
									className={styles.trio}
									src='/images/trio.svg'
									alt='trio'
								/>
							</div>
						</div>
					</div>
					<div className={styles.navBar}>
						{infoPageData.map(item => (
							<Link
								className={activeItemInfo === item.id ? styles.activeItem : ''}
								onClick={() => handleItemClick(item.id)}
								to={item.to}
								key={item.id}
							>
								{item.text}
							</Link>
						))}
						<Link
							className={activeItemInfo === 'more' ? styles.activeItem : ''}
							onClick={() => handleItemClick('more')}
							to={'more'}
						>
							More
							<svg
								width='17'
								height='11'
								viewBox='0 0 17 11'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									id='Vector'
									fillRule='evenodd'
									clipRule='evenodd'
									d='M0.865571 0.993818C1.16575 0.681112 1.57302 0.505259 1.99781 0.504931C2.4226 0.504603 2.83014 0.679826 3.1308 0.992068L8.41044 6.47672L13.6816 0.983917C13.9835 0.680066 14.388 0.511751 14.8081 0.515224C15.2281 0.518697 15.6301 0.693681 15.9273 1.00249C16.2246 1.31129 16.3934 1.72921 16.3974 2.16624C16.4014 2.60326 16.2402 3.02442 15.9486 3.339L9.54578 10.0111C9.2456 10.3238 8.83834 10.4996 8.41354 10.5C7.98875 10.5003 7.58121 10.3251 7.28055 10.0128L0.867392 3.35065C0.566822 3.03832 0.397778 2.61457 0.397436 2.1726C0.397095 1.73063 0.565484 1.30662 0.865571 0.993818Z'
									fill='#1C3144'
								/>
							</svg>
						</Link>
					</div>
				</section>
			</article>
			<Outlet />
		</>
	);
}
