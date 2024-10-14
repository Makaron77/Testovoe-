import { Button } from '@/components/ui/uiShadcn/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/uiShadcn/card';

import { Label } from '@/components/ui/uiShadcn/label';
import { useLogin } from '@/hooks/useLogin';
import { Input } from '../input';


export const description =
	"A simple login form with email and password. The submit button says 'Sign in'.";

export function LoginForm() {
	const { formData, handleChange, handleSubmit } = useLogin();

	return (
		<Card className='w-full max-w-sm'>
			<CardHeader>
				<CardTitle className='text-2xl'>Login</CardTitle>
				<CardDescription>
					Enter your email below to login to your account.
				</CardDescription>
			</CardHeader>
			<CardContent className='grid gap-4'>
				<form onSubmit={handleSubmit} className='grid gap-4'>
					<div className='grid gap-2'>
						<Label htmlFor='email'>Email</Label>
						<Input
							id='email'
							type='email'
							placeholder='m@example.com'
							required
							value={formData.email}
							onChange={handleChange}
						/>
					</div>
					<div className='grid gap-2'>
						<Label htmlFor='password'>Password</Label>
						<Input
							id='password'
							type='password'
							required
							value={formData.password}
							onChange={handleChange}
						/>
					</div>

					<CardFooter>
						<Button className='w-full' type='submit'>
							Sign in
						</Button>
					</CardFooter>
				</form>
			</CardContent>
		</Card>
	);
}
