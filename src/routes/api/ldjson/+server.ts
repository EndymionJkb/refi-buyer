import type { RequestHandler } from './$types';
import landownership from '$lib/schemas/json-ld/landownership.json-ld?raw';
export const GET: RequestHandler = async () => {
	return new Response(landownership);
};
