import React from "react";

//create your first component
import { Jumbotron } from "./jumbotron.jsx";
import { Card } from "./card.jsx";
import { Navbar } from "./navbar.jsx";
import { Footer } from "./footer.jsx";
const Home = () => {
	return (
		<div>
			<div className="container-fluid bg-dark">
				<div className="container bg-dark">
					<Navbar />
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col">
						<Jumbotron />
					</div>
				</div>
				<div className="row mb-5">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default Home;
