import React from "react";

export class Polygon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return <canvas id="canvas" width={500} height={500}></canvas>;
	}
}

export default Polygon;
