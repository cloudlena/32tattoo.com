<script lang="ts">
	import { AppBar, popup } from '@skeletonlabs/skeleton';
	import { base } from '$app/paths';
	import logo from '$lib/images/logo.svg';

	interface NavigationItem {
		label: string;
		url: string;
	}

	let navItems: NavigationItem[] = [];
	$: {
		navItems = [
			{ label: 'Tattoos', url: `${base}/tattoos` },
			{ label: 'Über Uns', url: `${base}/ueber-uns` },
			{ label: 'Studio', url: `${base}/studio` },
			{ label: 'Wissenswertes/Infos', url: `${base}/wissenswertes-infos` },
			{ label: 'Kontakt', url: `${base}/kontakt` }
		];
	}
</script>

<AppBar shadow="shadow-md" background="bg-surface-500">
	<svelte:fragment slot="lead">
		<a href="{base}/" class="flex items-center">
			<img src={logo} alt="Logo" height="h-12" class="h-12 mr-2" />
		</a>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		{#each navItems as navItem (navItem.label)}
			<a class="btn btn-lg hidden lg:block" href={navItem.url}>
				{navItem.label}
			</a>
		{/each}

		<div class="lg:hidden">
			<button
				class="btn btn-sm"
				use:popup={{
					event: 'click',
					target: 'small-navigation',
					closeQuery: '.small-navigation-item'
				}}
			>
				Menü
			</button>
			<div class="card p-4 w-60 shadow-xl" data-popup="small-navigation">
				<nav>
					<ul class="list-nav">
						{#each navItems as navItem (navItem.label)}
							<li class="small-navigation-item">
								<a href={navItem.url}>{navItem.label}</a>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
		</div>
	</svelte:fragment>
</AppBar>
