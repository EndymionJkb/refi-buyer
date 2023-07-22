import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import schema from './credential.json';
export const GET: RequestHandler = async () => {
	return json(schema);
};
