const Tweet = ({ username, name, tweetDate, message }) => {
	return (
		<div>
			<ul>
				<li>{username}</li>
				<li>{name}</li>
				<li>{tweetDate}</li>
				<li>{message}</li>
			</ul>
		</div>
	);
};
