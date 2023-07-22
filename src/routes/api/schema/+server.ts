import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import schema from '$lib/schemas/json/LandOwnershipCredential.json?raw';
export const GET: RequestHandler = async () => {
	return json(schema);
};
