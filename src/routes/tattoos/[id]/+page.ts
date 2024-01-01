import { error } from '@sveltejs/kit';
import members from '$lib/members';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const member = members.find((m) => m.id === params.id);
	if (!member) {
		throw error(404, `Member ${params.id} not found`);
	}

	return { member };
};
