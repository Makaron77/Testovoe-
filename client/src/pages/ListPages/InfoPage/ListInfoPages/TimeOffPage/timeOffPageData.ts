export interface IUpcoming {
	id: string;
	title: string;
	src: string;
	srcText: string;
	text: string;
	text1: string;
	text2: string;
}

export const upcomingData: IUpcoming[] = [
	{
		id: '1',
		title: 'Sick',
		src: '/images/sick.svg',
		srcText: '3',
		text: 'Days Available',
		text1: '1 dey scheduled',
		text2: 'Sick Full-Time',
	},
	{
		id: '2',
		title: 'Annual Leave ',
		src: '/images/annual.svg',
		srcText: '10.3',
		text: 'Days Available',
		text1: '',
		text2: 'Holiday Full-Time',
	},
	{
		id: '3',
		title: 'Comp/in Lieu Time',
		src: '/images/comp.svg',
		srcText: '0',
		text: 'Human Used(YTD)',
		text1: '',
		text2: 'Comp/in Lieu Time Flexible Policy',
	},
];

export interface ITableData {
	Date: string[];
	Description: string[];
	'Used days (-)': string[];
	'Earned days (+)': string[];
	Balance: string[];
}

export const tableData: ITableData = {
	Date: [
		'23/05/2024',
		'23/05/2024',
		'23/05/2024',
		'23/05/2024',
		'23/05/2024',
		'23/05/2024',
	],
	Description: [
		'Accrual for 23/05/2024 to 20/11/2024',
		'Accrual for 23/05/2024 to 20/11/2024',
		'Accrual for 23/05/2024 to 20/11/2024',
		'Accrual for 23/05/2024 to 20/11/2024',
		'Accrual for 23/05/2024 to 20/11/2024',
		'Accrual for 23/05/2024 to 20/11/2024',
	],
	'Used days (-)': ['\u00A0', '-6', '\u00A0', '\u00A0', '-6', '\u00A0'],
	'Earned days (+)': ['3.00', '\u00A0', '3.00', '3.00', '\u00A0', '3.00'],
	Balance: ['3.00', '3.00', '3.00', '3.00', '3.00', '3.00'],
};
