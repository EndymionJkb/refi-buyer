<script lang="ts">
	import '@picocss/pico/css/pico.css';

	import PolygonIdSdk from '@0xpolygonid/js-sdk';

	const {
		LocalStoragePrivateKeyStore,
		IdentityStorage,
		MerkleTreeLocalStorage,
		CredentialStorage,
		W3CCredential,
		BrowserDataSource,
		BjjProvider,
		KmsKeyType,
		IdentityWallet,
		CredentialWallet,
		KMS
	} = PolygonIdSdk;
</script>

<slot />
