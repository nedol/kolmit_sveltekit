export let dialog_data = {
	title: 'Intro',
	html: [
		`
	<style>
		body {
			font-family: 'Arial', sans-serif;
			background-color: #f4f4f4;
			margin: 0;
			padding: 0;
	}

		.container {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			margin: 20px;
	}

		.card {
			flex-basis: 35%;
			max-width: 400px;
			padding: 20px;
			border: 1px solid #3498db;
			border-radius: 10px;
			margin-bottom: 20px;
			background-color: #fff;
			box-shadow: 0 2px 4px rgba(0,
		0,
		0,
		0.1);
	}

		.header,
		.q {
			width: 95%;
			padding: 10px;
			border: 1px solid #3498db;
			border-radius: 5px;
			background-color: white;
			text-align: center;
			margin: 0px;
	}

		.toggleButton {
			background-color: #3498db;
			color: #fff;
			border: none;
			border-radius: 5px;
			cursor: pointer;
	}

		#question {
			visibility: hidden;
			text-align: center;
	}
	</style>

	<body>                   

		<div class="header">Mijn familie (James) &#8594; Trinidad</div>

		<div class="container">
			<div class="card">
				Vader: Ross<br />
				84-pensioen;<br />
				met zijn vrouw praten
			</div>

			<div class="card">
				Moeder: Rachel<br />
				78-gepensioeneerd<br />
				met haar man praten
			</div>

			<div class="card">
				Broer: Joey<br />
				51-kantoor<br />
				modelvliegtuigen bouwen Janice
			</div>

			<div class="card">
				Zus: Monica<br />
				48-verpleegster<br />
				koffie zetten
			</div>
		</div>
	</body>
	`,
		`
	<style>
		body {
			font-family: 'Arial', sans-serif;
			background-color: #f4f4f4;
			margin: 0;
			padding: 0;
	}

		.container {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			margin: 20px;
	}

		.card {
			flex-basis: 35%;
			max-width: 400px;
			padding: 20px;
			border: 1px solid #3498db;
			border-radius: 10px;
			margin-bottom: 20px;
			background-color: #fff;
			box-shadow: 0 2px 4px rgba(0,
		0,
		0,
		0.1);
	}

		.header,
		.q {
			width: 95%;
			padding: 10px;
			border: 1px solid #3498db;
			border-radius: 5px;
			background-color: white;
			text-align: center;
			margin: 10px;
	}

		.toggleButton {
			background-color: #3498db;
			color: #fff;
			border: none;
			border-radius: 5px;
			cursor: pointer;
	}

		#question {
			visibility: hidden;
			text-align: center;
	}
	</style>
	<body>
		<div class="header">Mijn familie (Mimi) &#8594; Libanon</div>

		<div class="container">
			<div class="card">
				Vader: Noah<br />
				58-tandarts;<br />
				puzzelen
			</div>

			<div class="card">
				Moeder: Nimra<br />
				56-huisvrouw<br />
				in de tuin werken
			</div>

			<div class="card">
				Broer: Rami<br />
				32-gemeente<br />
				tekenen<br />
				Dina
			</div>

			<div class="card">
				Zus: Aya<br />
				29-kokkin<br />
				Engels spreken
			</div>
		</div>
	</body>`,
		`
		<style>
		body {
			font-family: 'Arial', sans-serif;
			background-color: #f4f4f4;
			margin: 0;
			padding: 0;
	}

		.container {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			margin: 20px;
	}

		.card {
			flex-basis: 35%;
			max-width: 400px;
			padding: 20px;
			border: 1px solid #3498db;
			border-radius: 10px;
			margin-bottom: 20px;
			background-color: #fff;
			box-shadow: 0 2px 4px rgba(0,
		0,
		0,
		0.1);
	}

		.header,
		.q {
			width: 95%;
			padding: 10px;
			border: 1px solid #3498db;
			border-radius: 5px;
			background-color: white;
			text-align: center;
			margin: 0px;
	}

		.toggleButton {
			background-color: #3498db;
			color: #fff;
			border: none;
			border-radius: 5px;
			cursor: pointer;
	}

		#question {
			visibility: hidden;
			text-align: center;
	}
	</style>

	<body>                   

		<div class="header">Mijn familie (Thomas) &#8594; Engeland</div>

		<div class="container">
			<div class="card">
				Vader: George<br />
				60-bouwakker;<br />
				piano spellen
			</div>

			<div class="card">
				Moeder: Karen<br />
				57-arts<br />
				naar de cinema gaan
			</div>

			<div class="card">
				Broer: Devon<br />
				22-zinger<br />
				Sarah
			</div>

			<div class="card">
				Zus: Diana<br />
				16-school<br />
				kleren strijken
			</div>
		</div>
	</body>
	`
	],
	content: [
		{
			num: '1',
			question: {
				text: 'Waar woont jouw familie?'
			},
			answer: {
				text: 'Mijn familie woont nog in …'
			}
		},
		{
			num: '2',
			question: {
				text: 'Hoe heet jouw vader?'
			},
			answer: {
				text: 'Mijn vader heet …',
				img: ''
			}
		},
		{
			num: '3',
			question: {
				text: 'Hoe oud is hij?'
			},
			answer: {
				text: 'Hij is … jaar (oud)',
				img: ''
			}
		},
		{
			num: '4',
			question: {
				text: 'Werkt hij?'
			},
			answer: {
				text: 'Nee, hij is gepensioneerd./ Ja, hij werkt als … ./ Ja, hij is …',
				img: ''
			}
		},
		{
			num: '5',
			question: {
				text: 'Wat doet jouw vader graag?'
			},
			answer: {
				text: 'Mijn vader <cite>verbum+t</cite> graag …',
				img: ''
			}
		},
		{
			num: '6',
			question: {
				text: 'Hoe heet jouw moeder?'
			},
			answer: {
				text: 'Mijn moeder heet …',
				img: ''
			}
		},
		{
			num: '7',
			question: {
				text: 'Hoe oud is zij?'
			},
			answer: {
				text: 'Zij is … jaar (oud)',
				img: ''
			}
		},
		{
			num: '8',
			question: {
				text: 'Werkt zij?'
			},
			answer: {
				text: 'Nee. Ze is huisvrouw./ Ja, zij werkt als … ./ Ja, zij is … .',
				img: ''
			}
		},
		{
			num: '9',
			question: {
				text: 'Wat doet zij niet graag?'
			},
			answer: {
				text: 'Zij <cite> verbum +t </cite> niet graag … .',
				img: ''
			}
		},
		{
			num: '10',
			question: {
				text: 'Heb jij nog broers of zussen?'
			},
			answer: {
				text: 'Ja, ik heb nog 1 broer en 1 zus.',
				img: ''
			}
		},
		{
			num: '11',
			question: {
				text: 'Hoe heet jouw broer?'
			},
			answer: {
				text: 'Mijn broer heet … .',
				img: ''
			}
		},
		{
			num: '12',
			question: {
				text: 'Hoe oud is jouw broer?'
			},
			answer: {
				text: 'Mijn broer is … jaar (oud).',
				img: ''
			}
		},
		{
			num: '13',
			question: {
				text: 'Waar werkt jouw broer?'
			},
			answer: {
				text: 'Mijn broer werkt <b>IN een</b> <i>+ winkel</i> / bedrijf <b>OP een</b> <i> kantoor</i> / boerderij <b>BĲ de</b> <i> + persoon </i>/ bank <b>BĲ</b> <i>+ naam bedrijf</i>.',
				img: ''
			}
		},
		{
			num: '14',
			question: {
				text: 'Wat kan hij goed?'
			},
			answer: {
				text: 'Hij kan goed … -en',
				img: ''
			}
		},
		{
			num: '15',
			question: {
				text: 'Is hij getrouwd?'
			},
			answer: {
				text: 'Ja, hij is getrouwd met … .',
				img: ''
			}
		},
		{
			num: '16',
			question: {
				text: 'Hoe heet jouw zus?'
			},
			answer: {
				text: 'Mijn zus heet … .',
				img: ''
			}
		},
		{
			num: '17',
			question: {
				text: 'Hoe oud is zij?'
			},
			answer: {
				text: 'Zij is … jaar (oud).',
				img: ''
			}
		},
		{
			num: '18',
			question: {
				text: 'Welk beroep heeft jouw zus?'
			},
			answer: {
				text: 'Mijn zus werkt als … .',
				img: ''
			}
		},
		{
			num: '19',
			question: {
				text: 'Wat kan zij niet zo goed?'
			},
			answer: {
				text: 'Zij kan niet zo goed … -en.',
				img: ''
			}
		}
	]
};
