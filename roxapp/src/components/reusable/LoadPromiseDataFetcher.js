import React, { useState, useEffect } from 'react';

function LoadPromiseDataFetcher() {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const response = await fetch('https://jsonplaceholder.typicode.com/users');
				const jsonData = await response.json();
				setData(jsonData);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<div className='data'>
			<h2><pre>LoadPromiseDataFetcher</pre></h2>
			<div className="data-body">
			{isLoading ? (
				<p>Завантаження даних...</p>
			) : error ? (
				<p>Помилка: {error.message}</p>
			) : data ? (
				<ul>
					{data.map(item => (
						<li key={item.id}>
							<span className='data-id'>id:{item.id}</span>
							<div className="data-body-bottom">
								<p className='data-name'>{item.name}</p>
								<hr />
								<div className="data-website">
								<span><b>website:</b></span>
								<a href={item.website} className='data-website-link'>{item.website}</a>
								</div>
								
							</div>
							

						</li>
					))}
				</ul>
			) : (
				<p>Дані ще не завантажені</p>
				)}
				</div>
		</div>
	);
}

export default LoadPromiseDataFetcher;
