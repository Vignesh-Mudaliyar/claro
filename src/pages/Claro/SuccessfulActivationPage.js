import React from 'react'
import '../../assets/css/claro.css';

import icon from '../../assets/images/success-icon.svg';
import logo from '../../assets/images/logo.svg';



export default function SuccessfulActivationPage() {
    return (
        <section class="clarosteps registrationform">
		<div class="container">
			<div class="row">
				<div class="col-12 registep" >
					<div class="innerformm">
						<div class="header">
							<div class="logo text-center">
								<a href="#"><img src={logo} alt=""/></a>
							</div>
						</div>
						<div class="inftext inftext2 pb-0 text-center" style={{height: "90vh"}}>
							<div class="cicon sicon"><img src={icon} alt="" /></div>
							<h4 class="gcolor">Successful Activation</h4>
							<p>The number of your line is <span>3XXXXXXXXX.</span></p>
							<p>To start using the service, please turn off and then on your mobile phone.</p>
							<p>Wait for the SMS message to confirm your subscription.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}
