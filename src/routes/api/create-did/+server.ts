import axios from 'axios';
import type { RequestHandler } from './$types';
import { DOCK_API_TOKEN, DOCK_API_URL } from '$env/static/private';
import { json } from '@sveltejs/kit';

const baseUrl = DOCK_API_URL;

const axiosHeaders = {
	headers: {
		'DOCK-API-TOKEN': DOCK_API_TOKEN
	}
};

const polygonDidBody = {
	keyType: 'bjj',
	type: 'polygonid'
};
export const POST: RequestHandler = async ({ request }) => {
	const { name } = await request.json();
	try {
		// Create PolygonID DID
		const didResp = await axios.post(`${baseUrl}/dids`, polygonDidBody, axiosHeaders);
		console.log(didResp.data);

		// Create Issuer Profile for DID
		const profileBody = {
			name,
			type: 'polygonid',
			did: didResp.data.did
		};

		const result = await axios.post(`${baseUrl}/profiles`, profileBody, axiosHeaders);

		return json(result.data);
	} catch (e) {
		if (e instanceof Error) return json({ error: e.message });
	}

	return json({ error: 'Something went wrong' });
};
