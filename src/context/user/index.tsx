'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { User } from './types';
import { UserProviderProps, UserStateContextValues } from './types';
import routes from '@/cfg/routes.json';
import { replace } from '@/utils/message';

const UserStateContext = createContext<UserStateContextValues | null>(null);

export function UserProvider({ children }: UserProviderProps) {
	// const { createNotification, displayNotification } = useNotificationState(); TODO
	const [user, setUser] = useState<User>({});

	useEffect(() => {
		const userId =
			localStorage.getItem('user_id') || sessionStorage.getItem('user_id');
		const userToken = Cookies.get('token') || null;

		if (userId === null || userToken === null) return;
		fetchUser(userId, userToken);
	}, []);

	async function fetchUser(
		id: string,
		token: string,
		callback?: () => void
	): Promise<void> {
		axios
			.get<User>(replace(routes.requests.getUser, [id]), {
				params: {
					fields:
						'name,' +
						'email,' +
						'firstName,' +
						'lastName,' +
						'createdAt,' +
						'updatedAt,' +
						'logoutAt,' +
						'permissions.type,' +
						'dateTracker.type|date',
				},
				headers: { Authorization: `Bearer ${token}` },
			})
			.then(result => {
				setUser(_ => ({ ...result.data, id, token }));
				callback && callback();
			})
			.catch((err: any) =>
				// TODO
				// displayNotification(
				// 	createNotification(
				// 		'ERROR',
				// 		err?.message || pagesCfg.common.error.unknownExceptionGettingAccount
				// 	)
				// )
				console.error(err)
			);
	}

	const state: UserStateContextValues = {
		user,
		fetchUser,
	};

	return (
		<UserStateContext.Provider value={state}>
			{children}
		</UserStateContext.Provider>
	);
}

export function useUserState(): UserStateContextValues {
	const state = useContext(UserStateContext);

	if (state === null)
		throw new Error('useUserState must be used within a UserProvider');

	return state;
}
