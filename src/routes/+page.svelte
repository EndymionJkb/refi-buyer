<script lang="ts">
	import { createCredential, createDID } from '$lib/vendor/polygon';
	import { getUnixTime } from 'date-fns/fp';

	const sampleSchema = {
		url: 'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/KYCAgeCredential-v2.json',
		name: 'KYCAgeCredential'
	};

	let hasCreatedDid = false;
	let hasClaimUrl = false;

	let issuer: string;
	let value = 'Fish';
	let dob: string;
	let qrUrl: string;

	async function handleCreateDid(e: Event) {
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		const inputName = formData.get('name') as string;
		const data = await createDID(inputName);
		hasCreatedDid = true;
		issuer = data.did;
	}
	async function handleCreateCredential(e: Event) {
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		console.log(formData.get('dob'));
		const credential = {
			schema: sampleSchema.url,
			issuer,
			name: sampleSchema.name,
			type: ['VerifiableCredential', sampleSchema.name],
			subject: {
				birthday: getUnixTime(new Date(dob)),
				documentType: 3324
			}
		};
		const data = await createCredential(credential);
		qrUrl = data.qrUrl;
		hasClaimUrl = true;
	}

	$: console.log(dob);
</script>

<div class="grid">
	{#if hasClaimUrl}
		<a href={qrUrl} target="_blank">{qrUrl}</a>
	{:else if hasCreatedDid}
		<form on:submit|preventDefault={handleCreateCredential}>
			<input type="date" name="dob" bind:value={dob} />
			<button type="submit"> Submit </button>
		</form>
	{:else}
		<form on:submit|preventDefault={handleCreateDid}>
			<input type="text" name="name" bind:value />
			<button type="submit"> Submit </button>
		</form>
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
