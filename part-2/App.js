const App = () => {
	return (
		<div>
			<Tweet
				name="Nick"
				username="nikname1989"
				tweetDate="02/02/2021"
				message="My first tweet"
			/>
			<Tweet
				name="Mark"
				username="markname876"
				tweetDate="02/02/2021"
				message="Hello from part2"
			/>
			<Tweet
				name="Emily"
				username="emilyflower"
				tweetDate="02/02/2021"
				message="Good morning"
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
