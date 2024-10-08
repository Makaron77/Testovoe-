import * as React from 'react';
import styles from './InputSelectUIComponent.module.scss'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

export function InputSelectUIComponent() {
	return (
		<div className={styles.container}>
			<Select>
				<SelectTrigger
					className={`${styles.change} w-[165px] rounded-[8px] border border-gray-400 h-[33px]`}
				>
					<SelectValue placeholder='Request a Change' />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Changes</SelectLabel>
						<SelectItem value='apple'>Change1</SelectItem>
						<SelectItem value='banana'>Change2</SelectItem>
						<SelectItem value='blueberry'>Change3</SelectItem>
						<SelectItem value='grapes'>Change4</SelectItem>
						<SelectItem value='pineapple'>Change5</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>

			<Select>
				<SelectTrigger
					className={`${styles.settings} w-[76px] rounded-[8px] border border-gray-400 h-[33px]`}
				>
					<img
						src='images/iconTools1.svg'
						alt='Icon'
						className='mr-1 h-4 w-4'
					/>
					<SelectValue placeholder={''} />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Settings</SelectLabel>
						<SelectItem value='apple'>change password</SelectItem>
						<SelectItem value='banana'>setting1</SelectItem>
						<SelectItem value='blueberry'>setting2</SelectItem>
						<SelectItem value='grapes'>setting3</SelectItem>
						<SelectItem value='pineapple'>setting4</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
}