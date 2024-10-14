import React from 'react';
import styles from './TimeOffPage.module.scss';
import SideMenuComponent from './SideMenuComponent/SideMenuComponent';
import { ITableData, IUpcoming, tableData, upcomingData } from './timeOffPageData';
import { ConfigProvider, Select, Space } from 'antd';

export default function TimeOffPage() {
	return (
		<article className={styles.container}>
			<SideMenuComponent />
			<section className={styles.mainContent}>
				<div className={styles.headerBlock}>
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
				<div className={styles.upcomingBlock}>
					<div className={styles.cards}>
						{upcomingData.map((item: IUpcoming) => (
							<div className={styles.containerCard} key={item.id}>
								<div className={styles.card}>
									<p className={styles.title}>{item.title}</p>
									<div className={styles.srcText}>
										<img src={item.src} alt={item.title} />
										<p>{item.srcText}</p>
									</div>
									<p className={styles.text}>{item.text}</p>
									<p className={styles.text1}>{item.text1}</p>
								</div>
								<p className={styles.text2}>{item.text2}</p>
							</div>
						))}
					</div>
					<div className={styles.textUpcoming}>
						<img src='/images/watch.svg' alt='watch' />
						<p>Upcoming Time Off</p>
					</div>
				</div>
				<div className={styles.sickBlock}>
					<img src='/images/sick.svg' alt='sick' />
					<div className={styles.sickText}>
						<p>Jan 27</p>
						<p className={styles.circle}>1 dey of Sick</p>
					</div>
				</div>
				<div className={styles.independenceBlock}>
					<img src='/images/mouse.svg' alt='mouse' />
					<div className={styles.independenceText}>
						<p>Jul 4</p>
						<p className={styles.circle}>Independence Day</p>
					</div>
				</div>
				<div className={styles.HeaderTableBlock}>
					<div className={styles.header}>
						<div className={styles.history}>
							<img src='/images/history.svg' alt='history' />
							<p>History</p>
						</div>
						<ConfigProvider
							theme={{
								token: {
									colorBorder: '#7C96B1',
								},
							}}
						>
							<Space wrap className={styles.selectBlock}>
								<Select
									className={`${styles.sick} ${styles.select}`}
									defaultValue='Sick'
									style={{ width: 256 }}
									allowClear
									options={[
										{ value: 'sick', label: 'Sick' },
										{ value: 'bic', label: 'Bic' },
									]}
									placeholder='select it'
								/>

								<Select
									className={`${styles.all} ${styles.select}`}
									defaultValue='All'
									style={{ width: 96 }}
									allowClear
									options={[
										{ value: 'all', label: 'All' },
										{ value: 'one', label: 'One' },
									]}
									placeholder='select it'
								/>

								<Select
									className={`${styles.balance} ${styles.select}`}
									defaultValue='Balance History'
									style={{ width: 176 }}
									options={[
										{ value: 'balance', label: 'Balance History' },

										{ value: 'Yiminghe', label: 'yiminghe' },
									]}
								/>
							</Space>
						</ConfigProvider>
					</div>
				</div>
				<div className={styles.tableBlock}>
					{Object.entries(tableData).map(([key, values]) => (
						<div key={key} className={styles.tableColumnBlock}>
							<div className={styles.bgColorHeader}>
								{key === 'Date' ? (
									<p className={`${styles.tableHeader} ${styles.oneHeader}`}>
										{key}
										<img src='/images/tableArrow.svg' alt='tableArrow' />
									</p>
								) : (
									<p className={styles.tableHeader}>{key}</p>
								)}
							</div>
							<div className={styles.tableItems}>
								{values.map((value, index) => (
									<p
										className={
											key === 'Date'
												? `${styles.itemsDate} ${styles.items}`
												: key === 'Description'
													? `${styles.itemsDescription} ${styles.items}`
													: styles.items
										}
										key={index}
									>
										{value}
									</p>
								))}
							</div>
						</div>
					))}
				</div>
			</section>
		</article>
	);
}
