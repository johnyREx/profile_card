import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const data = {
	myName: "John Kwofie",
	myJob1: "Diplomat",
	myJob2: "Front-End Developer",
	profileImg: "assets/me.png",
	aboutMe:
		"Frontend web developer bridging technology with diplomacy 🌐 || Passionate about crafting elegant, user-centric experiences || Balancing code and global affairs ||",
	myTechs: [
		{
			name: "Web Design",
			color: "rgb(38, 74, 106)",
		},
		{
			name: "Product Design",
			color: "green",
		},
		{
			name: "Portfolio Development",
			color: "rgb(137, 89, 0)",
		},
		{
			name: "Mobile App Development",
			color: "rgb(38, 74, 106)",
		},
		{
			name: "Web Re-Design",
			color: "green",
		},
		{
			name: "Adobe Tools",
			color: "rgb(137, 89, 0)",
		},
		{
			name: "Figma",
			color: "rgb(38, 74, 106)",
		},
    {
      name: "Negotiation-Skills",
      color: "rgba(36, 65, 106)",
    },
    {
      name: "Crisis Management",
      color: "rgba(137, 89, 0)",
    },
    {
      name: "Networking",
      color: "rgba(135, 206, 250)",
    },
    {
      name: "Public Diplomacy",
      color: "rgba(137, 207, 240)"
    }
	],
};

function App() {
	return (
		<div className="pp-box">
			<div className="project-name">
				<h3>Profile Card</h3>
				<p>Built with React.js</p>
			</div>
			<div className="profile">
				<Identity imgUrl={data.profileImg} />
				<About about={data.aboutMe} />
				<Techs techs={data.myTechs} />
			</div>
		</div>
	);
}

function Identity({ imgUrl }) {
	return (
		<div className="identity">
			<img src={imgUrl} alt="John"></img>
			<div>
				<Name myName={data.myName} />
				<Job myJob1={data.myJob1} myJob2={data.myJob2} />
			</div>
		</div>
	);
}

function Name({ myName }) {
	return (
		<div>
			<h2>{myName}</h2>
		</div>
	);
}

function Job({ myJob1, myJob2 }) {
	return (
		<div className="jobs">
			<h3>{myJob1}</h3>
			<p>and</p>
			<h3>{myJob2}</h3>
		</div>
	);
}

function About({ about }) {
	return (
		<div className="about">
			<p>{about}</p>
		</div>
	);
}

function Techs({ techs }) {
	return (
		<div className="techs">
			{techs.map((tech) => {
				let bgColor = { backgroundColor: tech.color };
				return (
					<p className="tech" style={bgColor}>
						{tech.name}
					</p>
				);
			})}
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);