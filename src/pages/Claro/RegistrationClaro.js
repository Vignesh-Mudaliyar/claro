import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/claro.css';
import logo from '../../assets/images/logo.svg';


export default function RegistrationClaro() {
    return (
        <section className="clarosteps registrationform">
		<div className="container">
			<div className="row">
				<div className=" registep">
					<div className="innerformm">
						<div className="header">
						<Link to='/' class="backarrow"></Link>
							<div className="logo text-center">
								<a href="#"><img src={logo} alt=""/></a>
							</div>
						</div>
						<div className="inftext pb-0">
							<h4>Registration</h4>
							<p>Register your information to activate the new line in your name</p>
						</div>
						<form>
							<div className="csfielddcol">
								<div className="csfieldinner">
									<label>Document Type</label>
									<small className='p-0'>CC, CE, Passport</small>
									<select className="form-control csfield">
										<option>CC - National ID</option>
										<option>Option 1</option>
										<option>Option 2</option>
										<option>Option 3</option>
										<option>Option 4</option>
									</select>
								</div>
							</div>
							<div className="csfielddcol">
								<div className="csfieldinner">
									<label>Document Number</label>
									<small className='p-0'>e.g. 123456789</small>
									<input type="text" name="" placeholder="#" className="form-control csfield" />
								</div>
							</div>
							<div className="csfielddcol">
								<div className="csfieldinner">
									<label>Expiration Date</label>
									<small className='p-0'>e.g. dd/mm/yyyy</small>
									<input type="date" name="" className="form-control csfield date" />
								</div>
							</div>
							<div className="csfielddcol inftext notemsg">
								<p>Do you accept the personal data treatment policy? <br/>Law 1581 of 2021 for more information visit <br/><a href="#">www.claro.com.co</a></p>
							</div>
							<div className="csfielddcol d-flex radiopts">
								<div className="radiorow">
									<input type="radio" name="opt1" className="radiobtns" id="accept" checked="checked" value="1"/>
									<label htmlFor="accept">Accept</label>
								</div>
								<div className="radiorow me-0">
									<input type="radio" name="opt1" className="radiobtns" id="notaccept" value="2"/>
									<label htmlFor="notaccept">Not Accept</label>
								</div>
			        		</div>
			        		<div className="text-center">
								<Link to='/plan-selection' className="snbtn">Continue</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}
