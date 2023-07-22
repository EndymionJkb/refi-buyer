import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import schema from '$lib/credential.json';
export const GET: RequestHandler = async () => {
	return json(schema);
};
