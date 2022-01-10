import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/claro.css';
import logo from '../../assets/images/logo.svg';


export default function ClaroNumberSelection() {
    return (
        <section className="clarosteps registrationform">
		<div className="container">
			<div className="row">
				<div className="col-12 registep">
					<div className="innerformm" style={{height:'100vh'}}>
						<div className="header">
						<Link to='/plan-selection' class="backarrow"></Link>
							<div className="logo text-center">
								<a href="#"><img src={logo} alt=""/></a>
							</div>
						</div>
						<div className="inftext pb-0">
							<h4>Number Selection</h4>
							<p>Select one of the Following available numbers</p>
						</div>
						<form>
							<div className="csfielddcol">
								<div className="csfieldinner">
									<label>Mobile Number</label>
									<small className='p-0'>+57 3xx 1234567</small>
									<select className="form-control csfield">
										<option>Mobile Number</option>
										<option>Option 1</option>
										<option>Option 2</option>
										<option>Option 3</option>
										<option>Option 4</option>
									</select>
								</div>
							</div>
			        		<div className="text-center mt-4">
								<Link to='/success' type="submit" className="snbtn">Continue</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}
