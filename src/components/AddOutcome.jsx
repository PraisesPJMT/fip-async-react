import React, { useState, useRef, useEffect } from 'react';

const AddOutcome = ({ getOutcomes }) => {
	const [outcome, setOutcome] = useState('');

	const inputRef = useRef(null);

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (outcome.length < 1) return;

		await fetch('/api/outcomes', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ value: outcome }),
		})
			.then((res) => {
				if (res.ok) {
					getOutcomes();
					setOutcome('');
				}
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => inputRef.current.focus(), []);

	return (
		<form id='add-outcome' onSubmit={handleSubmit}>
			<h3>Add New Learning Outcome</h3>
			<div>
				<input
					type='text'
					name='outcome'
					value={outcome}
					ref={inputRef}
					placeholder='Enter outcome'
					onChange={(e) => setOutcome(e.target.value)}
				/>
				<button type='submit' disabled={outcome.length < 1}>
					ADD
				</button>
			</div>
		</form>
	);
};

export default AddOutcome;
