<script lang="ts">
	const listings = [
		{
			name: 'Farm 1',
			image: `https://loremflickr.com/320/240/mountains?${Math.random()}`,
			price: '45ETH'
		},
		{
			name: 'Farm 2',
			image: `https://loremflickr.com/320/240/mountains?${Math.random()}`,
			price: '4ETH'
		},
		{
			name: 'Farm 1',
			image: `https://loremflickr.com/320/240/mountains?${Math.random()}`,
			price: '45ETH'
		},
		{
			name: 'Farm 2',
			image: `https://loremflickr.com/320/240/mountains?${Math.random()}`,
			price: '4ETH'
		},
		{
			name: 'Farm 1',
			image: `https://loremflickr.com/320/240/mountains?${Math.random()}`,
			price: '45ETH'
		},
		{
			name: 'Farm 2',
			image: `https://loremflickr.com/320/240/mountains?${Math.random()}`,
			price: '4ETH'
		},
		{
			name: 'Farm 1',
			image: `https://loremflickr.com/320/240/mountains?${Math.random()}`,
			price: '45ETH'
		},
		{
			name: 'Farm 2',
			image: `https://loremflickr.com/320/240/mountains?${Math.random()}`,
			price: '4ETH'
		},
		{
			name: 'Farm 1',
			image: `https://loremflickr.com/320/240/mountains?${Math.random()}`,
			price: '45ETH'
		},
		{
			name: 'Farm 2',
			image: `https://loremflickr.com/320/240/mountains?${Math.random()}`,
			price: '4ETH'
		},
		{
			name: 'Farm 1',
			image: `https://loremflickr.com/320/240/mountains?${Math.random()}`,
			price: '45ETH'
		},
		{
			name: 'Farm 2',
			image: `https://loremflickr.com/320/240/mountains?${Math.random()}`,
			price: '4ETH'
		},
		{
			name: 'Farm 1',
			image: `https://loremflickr.com/320/240/mountains?${Math.random()}`,
			price: '45ETH'
		},
		{
			name: 'Farm 2',
			image: `https://loremflickr.com/320/240/mountains?${Math.random()}`,
			price: '4ETH'
		}
	];
</script>

<div class="grid parent">
	{#each listings as listing}
		<article>
			<header>{listing.name}</header>
			<img src={listing.image} alt="" class="" />
			<footer>
				<p>
					{listing.price}
				</p>
                <button>
                    Buy
                </button>
			</footer>
		</article>
	{/each}
</div>

<style>
	.parent {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		justify-items: stretch;
		align-items: stretch;
	}
</style>
