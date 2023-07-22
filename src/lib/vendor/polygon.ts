import { base } from '$app/paths';
import axios from 'axios';

export interface CreateDIDResponse {
	did: string;
	name: string;
	type: string;
}

export interface CreateCredentialResponse {
	id: string;
	qrUrl: string;
	created: string;
	updated: string;
	singleUse: boolean;
	claimMap: ClaimMap;
	issuer: string;
	protocol: string;
	credentialOptions: CredentialOptions;
}

export interface ClaimMap {
	id: string;
}

export interface CredentialOptions {
	anchor: boolean;
	persist: boolean;
	credential: Credential;
	distribute: boolean;
	emailMessage: string;
}

export interface Credential {
	name: string;
	type: string[];
	issuer: string;
	schema: string;
	subject: Subject;
}

export interface Subject {
	birthday: number;
	documentType: number;
}

export const createDID = async (name: string) => {
	const { data } = await axios.post<CreateDIDResponse>(
		base + 'api/create-did',
		{ name },
		{
			headers: { 'Content-Type': 'application/json' }
		}
	);
	return data;
};

export const createCredential = async (credential: Credential) => {
    
	const { data } = await axios.post<CreateCredentialResponse>(
		base + 'api/create-credential/',
		{credential}
	);
	return data;
};
