<script>
	import Quiz from './quiz/Quiz.svelte';
	export let data;

	export let view;
	let display = 'none';
	$: if (view === 'lesson') {
		display = 'block';
	} else {
		display = 'none';
	}

	let level = {
		level: '1.2',
		themes: [
			{
				num: '1',
				name: 'Familie',
				lessons: [
					{
						num: 1,
						title: '',
						quizes: [
							{ type: 'text', title: 'Familie 1' },
							{ type: 'text', title: 'Familie 2' },
							{ type: 'text', title: 'Familie 3' }
						]
					},
					{ num: 2, title: '' },
					{ num: 3, title: '' }
				]
			},
			{
				num: '2',
				name: 'In Het Restorant',
				lessons: [
					{
						num: 1,
						title: '',
						quizes: [
							{ type: 'text', title: 'In Het Restorant 1' },
							{ type: 'text', title: 'In Het Restorant 2' },
							{ type: 'text', title: 'In Het Restorant 3' }
						]
					},
					{ num: 2, title: '' },
					{ num: 3, title: '' }
				]
			},
			{
				num: '3',
				name: 'Wonen',
				lessons: [
					{
						num: 1,
						title: '',
						quizes: [
							{ type: 'text', title: 'Wonen 1' },
							{ type: 'text', title: 'Wonen 2' },
							{ type: 'text', title: 'Wonen 3' }
						]
					},
					{ num: 2, title: '' },
					{ num: 3, title: '' }
				]
			}
		]
	};
	let les = '2';
	let quizShow = false;

	function onClickQuiz(ev) {
		data.quiz = ev.currentTarget.attributes[0].nodeValue;
		data.level = ev.currentTarget.attributes[1].nodeValue.replace('.', '');
		data.name = ev.currentTarget.attributes[2].nodeValue;
		data.theme = ev.currentTarget.attributes[3].nodeValue;
		quizShow = true;
	}
</script>

<!-- {@debug display} -->
<div style="display:{display};overflow-y: auto;height: 400px;">
	{#if quizShow}
		<!-- {@debug data} -->
		<Quiz {data} />
	{:else}
		<div>Module {level.level}</div>
		{#each level.themes as theme, i}
			<div>{theme.name}</div>
			{#if theme.lessons}
				{#each theme.lessons as lesson}
					<div>{lesson.num}.{lesson.title}</div>
					{#if lesson.quizes}
						{#each lesson.quizes as quiz}
							<!-- {@debug quiz} -->
							<!-- svelte-ignore a11y-missing-content -->
							<div
								type={quiz.type}
								level={level.level}
								name={quiz.title}
								theme={theme.num}
								on:click={onClickQuiz}
							>
								{quiz.title}
							</div>
						{/each}
					{/if}
				{/each}
			{/if}
		{/each}
		<h3>Les {les}</h3>

		<div>
			<a
				on:click={() => {
					quizShow = true;
					data.quiz = 'text';
					data.name = 'Quiz 1';
					data.level = '12';
					data.theme = '1';
				}}>Familie van Marc 1</a
			>
		</div>
		<div style="height:30px" />
		<div>
			<a
				on:click={() => {
					quizShow = true;
					data.quiz = 'text';
					data.name = 'Quiz 2';
					data.level = '12';
					data.theme = '1';
				}}>Familie van Marc 2</a
			>
		</div>
		<!-- <div>Content</div> -->
	{/if}
</div>
