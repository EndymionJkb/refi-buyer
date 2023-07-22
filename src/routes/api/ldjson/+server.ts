import type { RequestHandler } from './$types';
import landownship from '$lib/landownship.json-ld?raw';
export const GET: RequestHandler = async () => {
	return new Response(landownship);
};
