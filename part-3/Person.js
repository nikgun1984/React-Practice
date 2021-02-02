const Person = ({ name, age, hobbies }) => {
	console.log(name);
	return (
		<div className="card text-center m-5" style={{ width: 18 + "rem" }}>
			<img
				src="https://images.saymedia-content.com/.image/t_share/MTc0NDYwMzYxMTg4NDUxOTc0/cutest_pokemon_20.png"
				className="card-img-top mx-auto d-block p-4"
				alt="Missing Image"
				style={{ width: 150 + "px" }}
			/>
			<div className="card-body">
				<h5 className="card-title">
					{name.length > 8 ? name.slice(0, 6) : name}
				</h5>
				<ul className="card-text">
					<b>Hobbies</b>:
					{hobbies.map((hobbie) => (
						<li key={hobbie.id}>{hobbie.item}</li>
					))}
				</ul>
				<a href="#" className="btn btn-primary">
					{age >= 18 ? "please go vote" : "you must be 18"}
				</a>
			</div>
		</div>
	);
};
