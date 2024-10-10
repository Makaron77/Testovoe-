import React from 'react';
import styles from './TimeOffPage.module.scss';
import SideMenuComponent from './SideMenuComponent/SideMenuComponent';
export default function TimeOffPage() {
	return (
		<article className={styles.container}>
			<SideMenuComponent />
			<section className={styles.mainContent}>
				<div className={styles.header}>
					<div className={styles.leftHeader}>
						<img src='/images/sync.svg' alt='sync' />
						<p>Time Off</p>
					</div>
					<div className={styles.rightHeader}>
						<p>
							Accrual Level Start Date <span>03/09-2020</span>
						</p>
						<button>Add Time Off Policy</button>
					</div>
				</div>
			</section>
		</article>
	);
}
