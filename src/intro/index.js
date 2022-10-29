import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="like">&lt;3</div>
				{this.props.smile}
				<h6>{this.props.text}</h6>
			</div>
		)
	}
}

const emotions = [
	{smile: "=)", description: "Ы."},
	{smile: "o_o", description: "Оoo..."},
	{smile: "^_^", description: "Ня"},
	{smile: "=(", description: "Эх..."}
]

ReactDOM.render(
	<div className="wrapper">
		{/* v1 */}
		{/* <div className="card">=)</div>
		<div className="card">O_o</div>
		<div className="card">^_^</div>
		<div className="card">=(</div> */}
		{/* v2 */}
		{/* <Card smile="=)" text="Ы."/>
		<Card smile="o_O" text="Оoo..."/>
		<Card smile="^_^" text="Ня"/>
		<Card smile="=(" text="Эх..."/> */}
		{/* v3 */}
		{emotions.map((el,i) => <Card smile={el.smile} text={el.description} key={i}/>)}

	</div>,
	document.querySelector("#root")
)