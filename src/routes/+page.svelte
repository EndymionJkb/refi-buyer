<script lang="ts">
	import { dev } from '$app/environment';
	import { PUBLIC_ISSUER_DID } from '$env/static/public';
	import { createCredential } from '$lib/vendor/polygon';

	const url = dev
		? 'http://localhost:5173/api/schema'
		: 'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/KYCAgeCredential-v2.json';
	const sampleSchema = {
		url,
		name: 'LandOwnership'
	};

	let hasClaimUrl = false;

	let dob: string;
	let qrUrl: string;
	let nationalID: number = 111;
	let lotAndBlock: string = 'Paris';
	let hectares: number = 322;

	async function handleCreateCredential(e: Event) {
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		const credential = {
			schema: sampleSchema.url,
			issuer: PUBLIC_ISSUER_DID,
			name: sampleSchema.name,
			type: ['VerifiableCredential', sampleSchema.name],
			subject: {
				nationalID,
				lotAndBlock,
				hectares
			}
		};
		const data = await createCredential(credential);
		qrUrl = data.qrUrl;
		hasClaimUrl = true;
	}

	$: console.log({ nationalID, lotAndBlock, hectares });
</script>

<div class="grid">
	<form on:submit|preventDefault={handleCreateCredential}>
		<input type="number" name="nationalID" bind:value={nationalID} />
		<input type="text" name="lotAndBlock" bind:value={lotAndBlock} />
		<input type="number" name="hectares" bind:value={hectares} />
		<button type="submit"> Submit </button>
	</form>
	{#if hasClaimUrl}
		<a href={qrUrl} target="_blank">{qrUrl}</a>
	{/if}
</div>

<style>
	.grid {
		display: grid;
		width: 100%;
		grid-gap: 10px;
		justify-items: center;
	}
	form {
		width: 600px;
	}
</style>
