import routes from '@/cfg/routes.json';
import { useLanguageState } from '@/context/language';
import { useRouteGuardState } from '@/context/routeGuard';
import Form from '@/components/form';
import { UserIcon } from '@/components/icons';
import PasswordField from '@/components/passwordField';
import TextField from '@/components/textField';

export default function RegisterPage() {
	const { currentLanguageFile: lang } = useLanguageState();
	const { redirect } = useRouteGuardState();

	return (
		<Form
			title="Log in"
			submitButton={{
				children: lang?.form?.logIn,
				icon: <UserIcon />,
			}}
			extraButtons={[
				{
					variant: 'ghost',
					children: lang?.form?.alreadyHaveAcc,
					onClick: () => redirect(routes.pages.logIn),
				},
			]}
		>
			<TextField label="Username" icon={<UserIcon />} />
			<PasswordField label="Password" />
		</Form>
	);
}
