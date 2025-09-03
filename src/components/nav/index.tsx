import { redirect } from 'next/navigation';
import styles from './styles.module.scss';
import routes from '@/cfg/routes.json';
import { useLanguageState } from '@/context/language';
import Button from '@/components/button';
import { AppLogo } from '@/components/icons';

export default function Nav() {
	const { currentLanguageFile: lang } = useLanguageState();

	return (
		<nav id={styles['wrapper']}>
			<div id={styles['logo']}>
				<AppLogo />
			</div>

			<div id={styles['nav-links']}>
				<Button
					variant="ghost"
					scheme="light"
					onClick={_ => redirect(routes.pages.home)}
				>
					{lang?.pages?.home?.navBtnHomePage}
				</Button>

				<Button
					variant="ghost"
					scheme="light"
					onClick={_ => redirect(routes.pages.dashboard)}
				>
					{lang?.pages?.home?.navBtnDashboard}
				</Button>

				<Button variant="primary" onClick={_ => redirect(routes.pages.logIn)}>
					{lang?.pages?.home?.navBtnLogIn}
				</Button>

				<Button
					variant="outline"
					onClick={_ => redirect(routes.pages.register)}
				>
					{lang?.pages?.home?.navBtnRegister}
				</Button>
			</div>
		</nav>
	);
}
