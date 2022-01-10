import React from 'react';
import '../../assets/css/claro.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

export default function ClaroWelcomePage() {
    return (
        <section className="clarosteps welcomestep">
		<div className="container">
			<div className="row">
				<div className="col-12 registep">
					<div className="logo text-center">
						<a href="#"><img src={logo} alt=""/></a>
					</div>
					<div className="inftext text-center">
						<h4>Welcome to Clar</h4>
						<p className="ssubtext">Do you wanna register the mobile in your name?</p>
					</div>
					<form>
						<div className="csfielddcol d-flex justify-content-center radiopts">
							<div className="radiorow">
								<input type="radio" name="opt1" className="radiobtns" id="yes" checked="checked" value="1" />
								<label htmlFor="yes">Yes</label>
							</div>
							<div className="radiorow me-0">
								<input type="radio" name="opt1" className="radiobtns" id="no" value="2" />
								<label htmlFor="no">No</label>
							</div>
		        		</div>
		        		<div className="text-center">
							<Link to="/register" className="snbtn">Continue</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
    )
}
