<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Title from '$lib/Title.svelte';
	import questions from '$lib/questions';
</script>

<Title
	title="Häufig Gestellte Fragen"
	description="Diese Fragen werden uns häufig gestellt. Die Antworten kannst du einfach nachlesen, indem du auf die entsprechende Frage klickst."
/>

<section class="px-4 md:px-8">
	<div class="max-w-3xl mx-auto py-16">
		<Accordion>
			{#each questions as question (question.question)}
				<AccordionItem>
					<svelte:fragment slot="summary"
						><h2 class="h3 font-bold">{question.question}</h2></svelte:fragment
					>
					<svelte:fragment slot="content">
						<div class="prose">
							{#each question.answers as answer}
								<p>{answer}</p>
							{/each}
						</div>
					</svelte:fragment>
				</AccordionItem>
			{/each}
		</Accordion>
	</div>
</section>
