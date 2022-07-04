import "./Body.css";

function Body ({titu, subit}){
	return( 
		<div className="inicio">
        <h5 className="titulo">{subit}</h5>
		<p className="numeracao">{titu}</p>
		
		</div>
	);
}
export default Body;