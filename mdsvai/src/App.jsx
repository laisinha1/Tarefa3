import Title from "./Title";
import Body from "./Body";

function App(){
	const titulo = [
		{
			titu: "Mais Lidas",
		},
	];
	const pagina = [
		{
			titu: "1",
			subit: "Funcionaria que denunciou procurador diz que agressor 'desprezava mulheres e teme sair na rua: 'Muito medo'",
		},
		{
			titu: "2",
			subit: "Imposto de Renda 2022: Receita abre consultas ao 2° lote de restituição nessa quinta; veja se você está no grupo ",
		},
		{
			titu: "3",
			subit: "Governo opera para evitar CPI do MEC, que ganhou força após prisão de Milton Ribeiro",
		},
    	{
			titu: "4",
			subit: "Em Itajubá, assaltantes armados atacam agência da Caixa Econômica Federal; 7 ficam feridos",
		},
		{
			titu: "5",
			subit: "Almir Sater é 'parado em blitz' e policiais tietam cantor: 'o senhor é o dono dessa chalana?'",
		},
	];

	return(
		<div>
			{
				titulo.map((tituloo) => {
					return <Title
							titu={tituloo.titu}
						/>;
				})
			}
		
		<div className="paginaa"> 
			{
			pagina.map((pag, conti) => {
					return <Body key={conti}
							titu={pag.titu}
							subit={pag.subit}
						/>;
				})
			}
	        </div>
			</div>
	);
}
export default App;