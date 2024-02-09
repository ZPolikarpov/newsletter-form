import illustration from "./assets/images/illustration-sign-up-desktop.svg"

function App() {
	return (
		<>
			<main className="container">
				<div className="card" data-type="with-image">

					<div className="card__content">
						<div className="flow" style={{"--flow-spacer" : "1.5rem"}}>
							<h1 className="card__heading">Stay updated!</h1>

							<p>Join 60,000+ product managers receiving monthly updates on:</p>

							<ul className="list">
								<li><div>Product discovery and building what matters</div></li>
								<li>Measuring to ensure updates are a success</li>
								<li>And much more!</li>
							</ul>

						</div>
						<div className="contact-form">
							<div className="form-group">
								<label htmlFor="email">Email address</label>
								<input className="margin-block-start-2" type="email" name="email" id="email" placeholder="email@company.com" />
								<button className="button | margin-block-start-6" data-type="primary" type="submit">Subscribe to monthly newsletter</button>
							</div>
						</div>
					</div>

					<img src={illustration}/>

				</div>
			</main>
		</>
  )
}

export default App
