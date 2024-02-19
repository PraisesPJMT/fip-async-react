import { useEffect, useState } from 'react';
import AddOutcome from './AddOutcome';
import Outcome from './Outcome';

const Task = () => {
	const [outcomes, setOutcomes] = useState([]);

	const getOutcomes = async () => {
		await fetch('/api/outcomes')
			.then((res) => res.json())
			.then((data) => setOutcomes([...data.outcomes]))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getOutcomes();
	}, []);

	return (
		<section id='task'>
			<h2>Advanced Frontend Development</h2>
			<h3 className='sub-title'>Week 06 - Assyncronous ReactJS</h3>

			<div className='section'>
				<h3>Learning Outcomes</h3>
				<p>Learn about Assyncronous actions in React. Learn the following:</p>
				<ul id='objectives'>
					{outcomes.map((outcome, index) => (
						<Outcome
							key={outcome.id}
							outcome={outcome}
							getOutcomes={getOutcomes}
							index={index}
						/>
					))}
				</ul>
			</div>

			<AddOutcome getOutcomes={getOutcomes} />

			<div className='section'>
				<h3>Deliverables</h3>
				<p>Presentation of study from learning outcome.</p>
			</div>
		</section>
	);
};

export default Task;
