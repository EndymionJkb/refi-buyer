import axios from 'axios';
import { DOCK_API_TOKEN, DOCK_API_URL } from '$env/static/private';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

const axiosHeaders = {
	headers: {
		'DOCK-API-TOKEN': DOCK_API_TOKEN
	}
};
const baseUrl = DOCK_API_URL;

export const POST: RequestHandler = async ({ request }) => {
	const claimRequest = {
		schema: '',
		claims: ['id'],
		credentialOptions: {
			anchor: false,
			persist: false,
			emailMessage: '',
			credential: {},
			distribute: true
		}
	};
	const { credential } = await request.json();
	try {
		// Create Credential Claim request
		const requestBody = {
			...claimRequest,
			schema: credential.schema,
			credentialOptions: {
				...claimRequest.credentialOptions,
				credential
			}
		};
		console.log(requestBody);
		const credentialResponse = await axios.post(
			`${baseUrl}/credentials/request-claims`,
			requestBody,
			axiosHeaders
		);
		return json(credentialResponse.data);
	} catch (e) {
		if (e instanceof Error) return json({ error: e.message });
	}
	return json({ error: 'Something went wrong' });
};
