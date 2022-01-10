import React from 'react'
import { Link } from 'react-router-dom';
import '../../assets/css/claro.css';
import logo from '../../assets/images/logo.svg';



export default function ClaroPlanSelection() {
    return (
        <section className="clarosteps registrationform">
		<div className="container">
			<div className="row">
				<div className="col-12 registep">
					<div className="innerformm" style={{height:'100vh'}}>
						<div className="header">
						<Link to='/register' class="backarrow"></Link>
							<div className="logo text-center">
								<a href="#"><img src={logo} alt=""/></a>
							</div>
						</div>
						<div className="inftext pb-0">
							<h4>Plan Selection</h4>
							<p>Select one of the Following plans</p>
						</div>
						<form>
							<div className="csfielddcol">
								<div className="csfieldinner">
									<label>Plan Type</label>
									<small className='p-0'>Voice, Data</small>
									<select className="form-control csfield">
										<option>Voice Plan</option>
										<option>Option 1</option>
										<option>Option 2</option>
										<option>Option 3</option>
										<option>Option 4</option>
									</select>
								</div>
							</div>
			        		<div className="text-center mt-4">
								<Link to='/number-selection' className="snbtn">Continue</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}
