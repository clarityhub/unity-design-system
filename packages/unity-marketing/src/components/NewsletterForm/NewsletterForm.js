import React, { Component } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Button from '@clarityhub/unity-web/lib/components/Buttons';
import Dismissable from '@clarityhub/unity-web/lib/interactions/Dismissable';
import Notification from '@clarityhub/unity-web/lib/components/Notification';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import InputGroup from '@clarityhub/unity-web/lib/forms/InputGroup';
import LabelledInput from '@clarityhub/unity-web/lib/forms/LabelledInput';
import LabelledCheckbox from '@clarityhub/unity-web/src/forms/LabelledCheckbox';

import { GDPR_NAME, URL } from './config';

class NewsletterForm extends Component {
    state = {
    	email: '',
    }

    render() {
    	return (
    		<MailchimpSubscribe
    			url={URL}
    			render={({ subscribe, status, message }) => (
    				<div>
    					<form onSubmit={e => {
    						e.preventDefault();
    						const form = e.target;
                            
    						const formData = {
    							EMAIL: form.email.value,
    							[GDPR_NAME]: form[GDPR_NAME].selected ? form[GDPR_NAME].value : '',
    						};

    						subscribe(formData);
    					}}>
    						<Typography center type="h2">
                                Interesting Issues, Straight to Your Inbox
    						</Typography>
    						<Typography center type="text">
                                We send you a weekly newsletter with open-source issues that need your help and programming articles to help you grow as a developer
    						</Typography>

    						<InputGroup>
    							{status === "error" && (
    								<Dismissable>
    									{({ Dismiss }) => (
    										<Notification type="danger" variant="block">
    											<Dismiss />
    											<div dangerouslySetInnerHTML={{ __html: message }} />
    										</Notification>
    									)}
    								</Dismissable>
    							)}
    							{status === "success" && (
    								<Dismissable>
    									{({ Dismiss }) => (
    										<Notification type="success" variant="block">
    											<Dismiss />
                                                Thank you for subscribing!
    										</Notification>
    									)}
    								</Dismissable>
    							)}
    						</InputGroup>

    						<InputGroup>
    							<LabelledInput
    								label="Email"
    								name="email"
    								type="email"
    								onChange={e => this.setState({ email: e.target.value })}
    								value={this.state.email}
    								required
    							/>
    						</InputGroup>
    						<InputGroup>
    							<Button
    								block
    								type="primary"
    								loading={status === "sending"}
    								disabled={status === "sending"}
    							>
                                    Sign Up
    							</Button>
    						</InputGroup>
    						<InputGroup>
    							<LabelledCheckbox
    								id="gdpr_37317"
    								name={GDPR_NAME}
    								value="Y"
    								label={`
                                        If you are okay with us sending you updated
                                        via email, please check the box. Unsubscribe
                                        whenever you want!
                                    `}
    							/>
    						</InputGroup>
    					</form>
    				</div>
    			)}
    		/>
    	);
    }
}

export default NewsletterForm;
