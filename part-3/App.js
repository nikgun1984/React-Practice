const App = () => {
	return (
		<div>
			<Person
				name="Nick"
				age={36}
				hobbies={[
					{ id: 1, item: "Computer Programming" },
					{ id: 2, item: "Movies" },
					{ id: 3, item: "Video Games" },
				]}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
