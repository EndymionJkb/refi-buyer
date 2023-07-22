<script lang="ts">
	import { dev } from '$app/environment';
	import { PUBLIC_SECRETARIA_DID } from '$env/static/public';
	import { createCredential } from '$lib/vendor/polygon';

	const url = 'https://raw.githubusercontent.com/EndymionJkb/refi-buyer/master/src/lib/schemas/json/LandOwnershipCredential.json';
	const sampleSchema = {
		url,
		name: 'LandOwnership'
	};

	let hasClaimUrl = false;

	let dob: string;
	let qrUrl: string;
	let nationalID: number = 873459324;
	let lotAndBlock: string = '07-090-1346-0252';
	let hectares: number = 4;

	async function handleCreateCredential(e: Event) {
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		const credential = {
			schema: sampleSchema.url,
			issuer: PUBLIC_SECRETARIA_DID,
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
	  <label for="nationalID">National ID</label>
		<input type="number" id="nationalID" bind:value={nationalID} />
		<br />
		<label for="propertyDescription">Property Description (Lot & Block)</label>
		<input type="text" id="propertyDescription" bind:value={lotAndBlock} />
		<br />
		<label for="numHectares">Number of Hectares</label>
		<input type="number" id="numHectares" bind:value={hectares} />
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
