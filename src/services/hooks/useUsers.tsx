import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

type IUser = {
	id: string;
	name: string;
	email: string;
	createdAt: string;
};

export async function getUsers(): Promise<IUser[]> {
	const { data } = await api.get<{ users: IUser[] }>("/api/dev/users");

	return data.users.map((user) => ({
		id: user.id,
		name: user.name,
		email: user.email,
		createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "long",
			year: "numeric",
		}),
	}));
}

export function useUsers() {
	return useQuery(["users"], getUsers, {
		staleTime: 1000 * 5,
	});
}
