import React, { useContext, useState } from 'react';
import styles from './InfoPage.module.scss';
import { UserContext } from '@/context/context';
import { Col, Skeleton, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { InputSelectUIComponent } from '@/components/InputSelectUIComponent/InputSelectUIComponent';
export default function InfoPage() {
	const { userData, setUserData } = useContext(UserContext);

	return (
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
			</section>
		</article>
	);
}
