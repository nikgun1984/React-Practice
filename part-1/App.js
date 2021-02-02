const App = () => {
	return (
		<div>
			<FirstComponent />
			<NamedComponent name="Nick" />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
