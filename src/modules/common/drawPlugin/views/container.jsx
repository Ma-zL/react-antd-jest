import React from "react";
import Canvas from "./canvas";
import "../styles/style.less";

export class Polygon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="draw_cont">
				<div className="draw_tools">
					<div className="tool"></div>
					<div className="tool"></div>
				</div>
				<div className="canvas_cont">
					<Canvas />
				</div>
			</div>
		);
	}
}

export default Polygon;
