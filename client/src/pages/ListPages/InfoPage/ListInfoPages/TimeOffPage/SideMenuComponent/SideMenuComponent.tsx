import React from 'react'
import styles from './SideMenuComponent.module.scss'
export default function SideMenuComponent() {
	return (
		<section className={styles.sideMenu}>
			<div
				className={`${styles.blockSideMenuContacts} ${styles.blockSideMenu}`}
			>
				<div className={styles.phone}>
					<img src='/images/phone.svg' alt='phone' />
					<p>07911 654321</p>
				</div>
				<div className={styles.message}>
					<img src='/images/message.svg' alt='message' />
					<p>avd.yana@videorollnet</p>
				</div>
				<div className={styles.contacts}>
					<img src='/images/insta.svg' alt='instagram' />
					<img src='/images/facebook.svg' alt='facebook' />
					<img src='/images/twitter.svg' alt='twitter' />
				</div>
			</div>
			<div
				className={`${styles.blockSideMenuHireDate} ${styles.blockSideMenu}`}
			>
				<h3>Hire Date</h3>
				<div>
					<p>Sep. 3,2020</p>
					<p>
						3y - 9m - 20d
					</p>
				</div>
			</div>
			<div
				className={`${styles.blockSideMenuStatistic} ${styles.blockSideMenu}`}
			>
				<div>
					<img src='/images/lattice.svg' alt='lattice' />
					<p>5</p>
				</div>
				<div>
					<img src='/images/watch.svg' alt='watch' />
					<p>Full-Time</p>
				</div>
				<div>
					<img src='/images/operations.svg' alt='operations' />
					<p>Operations</p>
				</div>
				<div>
					<img src='/images/globe.svg' alt='globe' />
					<p>Europe</p>
				</div>
				<div>
					<img src='/images/locator.svg' alt='locator' />
					<p>London, UK</p>
				</div>
			</div>
			<div className={`${styles.blockSideMenuReports} ${styles.blockSideMenu}`}>
				<h3>Direct Reports</h3>
				<div className={styles.users}>
					<div>
						<img src='/images/user.svg' alt='user' /> <p>Shane</p>
					</div>
					<div>
						<img src='/images/user.svg' alt='user' /> <p>Nathan</p>
					</div>
					<div>
						<img src='/images/user.svg' alt='user' /> <p>Mitchell</p>
					</div>
					<div>
						<img src='/images/user.svg' alt='user' />
						<p>Philip</p>
					</div>
					<div>
						<img src='/images/operations.svg' alt='operations' />{' '}
						<p>4 More...</p>
					</div>
				</div>
			</div>
		</section>
	);
}
