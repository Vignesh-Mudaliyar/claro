import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/claro.css';
import icon from '../../assets/images/fail-icon.svg';
import logo from '../../assets/images/logo.svg';

export default function FailedActivationPage() {
    return (
        <section class="clarosteps registrationform">
		<div class="container">
			<div class="row">
				<div class="col-12 registep">
					<div class="innerformm">
						<div class="header">
							<div class="logo text-center">
								<a href="#"><img src={logo} alt=""/></a>
							</div>
						</div>
						<div class="inftext inftext2 text-center pb-0">
							<div class="cicon ficon"><img src={icon} alt="" /></div>
							<h4 class="rcolor">Failed Activation</h4>
							<p>At this moment, we could not activate your mobile line. Please look for a Claro Centre of Support and Sales.</p>
						</div>
						<form>
			        		<div class="text-center mt-3">
								<Link to='/claro' class="snbtn">Return</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}
