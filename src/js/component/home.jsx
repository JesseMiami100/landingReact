import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Footer from "./footer.jsx";
import Navbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx";
import Card from "./cardbox.jsx";

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container-fluid" ><br />
			<Jumbotron />

			<div className="row">
				<div className="col"> <Card url ="https://picsum.photos/id/30/300/290"/> </div>
				<div className="col"> <Card url ="https://picsum.photos/id/1025/300/290"/> </div>
				<div className="col"> <Card url ="https://picsum.photos/id/1039/300/290"/> </div>
				<div className="col"> <Card url ="https://picsum.photos/id/1074/300/290"/> </div>
			</div>
			</div>
			<Footer/>
		
		</div>
	)
};

export default Home;
