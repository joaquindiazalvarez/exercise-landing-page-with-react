import React from "react";
import rigoBaby from "../../img/rigo-baby.jpg";
export function Card() {
	return (
		<div className="card" style={{ width: "auto" }}>
			<img src={rigoBaby} class="card-img-top" alt="rigobaby" />
			<div className="card-body">
				<h5 className="card-text">asdasd</h5>
				<p className="card-text">asdasd</p>
				<a href="#" className="btn btn-primary">
					asdas
				</a>
			</div>
		</div>
	);
}
