import {
	User as PrismaUser,
	Board,
	Comment,
	BoardContributor,
	UserPermission,
	UserStatus,
	DateTracker,
} from '@prisma/client';
import { ReactNode } from 'react';

export type User = Partial<PrismaUser> & {
	boards?: Partial<Board>[];
	comments?: Partial<Comment>[];
	contributingToBoards?: Partial<BoardContributor>[];
	permissions?: Partial<UserPermission>[];
	status?: Partial<UserStatus>;
	dateTracker?: Partial<DateTracker>;
};

export type UserStateContextValues = {
	user: User;
	fetchUser: (id: string, token: string, callback?: () => void) => void;
};

export type UserProviderProps = {
	children: ReactNode;
};
