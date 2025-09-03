'use client';

import routes from '@/cfg/routes.json';
import Form from '@/components/form';
import { UserIcon } from '@/components/icons';
import PasswordField from '@/components/passwordField';
import TextField from '@/components/textField';
import { useLanguageState } from '@/context/language';
import { useRouteGuardState } from '@/context/routeGuard';

export default function LoginPage() {
	const { currentLanguageFile: lang } = useLanguageState();
	const { redirect } = useRouteGuardState();

	return (
		<Form
			title="Log in"
			submitButton={{
				children: 'Log in',
				icon: <UserIcon />,
				placeholder: 'Steve123',
			}}
			extraButtons={[
				{
					variant: 'ghost',
					children: lang?.form?.noAccYet,
					onClick: () => redirect(routes.pages.register),
				},
			]}
			extraLinks={[
				{
					prefix: lang?.form?.forgotPwdLinkPretext,
					children: lang?.form?.forgotPwdLinkText,
					onClick: () => {},
				},
			]}
		>
			<TextField label="Username" icon={<UserIcon />} />
			<PasswordField label="Password" />
		</Form>
	);
}
