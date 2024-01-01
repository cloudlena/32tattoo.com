<script lang="ts">
	import { base } from '$app/paths';
	import members from '$lib/members';
</script>

<div class="grid md:grid-cols-2 gap-16">
	{#each members as member (member.id)}
		<div class="grid md:grid-cols-2 gap-8">
			<div class="w-full h-auto">
				<img src={member.portrait} alt={member.name} />
			</div>
			<div>
				<h3 class="h3 font-bold mb-4">
					{member.name}
					{#if member.subtitle}
						<br /><span class="italic">{member.subtitle}</span>
					{/if}
				</h3>
				<p class="mb-4">{member.styles.join(', ')}</p>
				<p><a class="anchor" href="{base}/tattoos/{member.id}">Mehr</a></p>
			</div>
		</div>
	{/each}
</div>
