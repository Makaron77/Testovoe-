import React, { useContext, useState } from 'react';
import styles from './InfoPage.module.scss';
import { UserContext } from '@/context/context';
import { Col, List, Skeleton, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { InputSelectUIComponent } from '@/components/InputSelectUIComponent/InputSelectUIComponent';
import { Link, Outlet } from 'react-router-dom';
import { infoPageData } from './infoPageData';
export default function InfoPage() {
	const { userData, setUserData } = useContext(UserContext);
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
								<InputSelectUIComponent />
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
					</div>
				</section>
			</article>
			<Outlet />
		</>
	);
}
