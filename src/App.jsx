import illustration from "./assets/images/illustration-sign-up-desktop.svg"
import checkmark from "./assets/images/icon-success.svg"
import { useState } from "react"

function App() {
	const [email, setEmail] = useState(null)
	const [subscribed, setSubscribed] = useState(false)

	function onSubscribe(event, email) {
		event.preventDefault()
		let bIsValidForm = event.target.closest(".contact-form").checkValidity();
		if (email && email.length > 0 && bIsValidForm) {
			setSubscribed(true)
		}
	}

	function renderContent(subscribed) {
		if (subscribed) {
			return <>
				<div className="card__content">
					<img src={checkmark} />
					<h1 className="card__heading">Thanks for subscribing!</h1>
					<p>A confirmation email has been sent to <span className="fw-bold">{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
					<button className="button"
							data-type="primary">Dismiss message</button>
				</div>
			</>
		} else {
			return <>
				<div className="card__content">
					<div className="flow" style={{"--flow-spacer" : "1.5rem"}}>
						<h1 className="card__heading">Stay updated!</h1>

						<p>Join 60,000+ product managers receiving monthly updates on:</p>

						<ul className="list">
							<li>Product discovery and building what matters</li>
							<li>Measuring to ensure updates are a success</li>
							<li>And much more!</li>
						</ul>

					</div>

					<form className="contact-form">
						<fieldset className="form-group">
							<div className="input-labels">
								<label htmlFor="email">Email address</label>
								<p className="error-text">Valid email required</p>
							</div>
							<input className="margin-block-start-2" onChange={(event) => setEmail(event.target.value)}
								type="email" name="email" id="email" placeholder="email@company.com"/>
						</fieldset>
						<fieldset className="form-group">
							<button className="button | margin-block-start-6"
								data-type="primary" type="submit" onClick={(event) => onSubscribe(event, email)}>Subscribe to monthly newsletter</button>
						</fieldset>
					</form>

				</div>

				<img src={illustration}/>
			</>
		}
	}

	return (
		<>
			<main className="container" data-type={ subscribed ? "narrow" :  null }>
				<div className="card" data-type={ subscribed ? null : "with-image"}>
					{ renderContent(subscribed) }
				</div>
			</main>
		</>
  )
}

export default App
