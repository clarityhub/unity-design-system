import React, { Component, Fragment } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styled from '@emotion/styled';
import Button from '@clarityhub/unity-web/lib/components/Buttons';
import Dismissable from '@clarityhub/unity-web/lib/interactions/Dismissable';
import Notification from '@clarityhub/unity-web/lib/components/Notification';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import InputGroup from '@clarityhub/unity-web/lib/forms/InputGroup';
import LabelledInput from '@clarityhub/unity-web/lib/forms/LabelledInput';
import LabelledCheckbox from '@clarityhub/unity-web/lib/forms/LabelledCheckbox';
import { bool, func, node, string } from 'prop-types';

import { GDPR_NAME, URL } from './config';

const FormWrapper = styled.div`
	padding-top: 2rem;
	padding-bottom: 2rem;
`;

class Form extends Component {
	static propTypes = {
		children: node,
		simple: bool,
		status: string,
		subscribe: func.isRequired,
		variant: string,
	}

	state = {
		email: '',
	}

	handleSubmit = e => {
		e.preventDefault();
		const { subscribe } = this.props;

		const form = e.target;

		const formData = {
			EMAIL: form.email.value,
			[GDPR_NAME]: form[GDPR_NAME].selected ? form[GDPR_NAME].value : '',
		};

		subscribe(formData);
	}

	render() {
		const { children, status, message, simple, variant } = this.props;

		return (
			<FormWrapper>
				<form onSubmit={this.handleSubmit}>

					{(status === "error" || status === 'success') && (
						<InputGroup>
							{status === "error" && (
								<Dismissable>
									{({ Dismiss }) => (
										<Notification type="danger" variant="thin">
											<Dismiss />
											<Typography color="white" dangerouslySetInnerHTML={{ __html: message }} />
										</Notification>
									)}
								</Dismissable>
							)}
							{status === "success" && (
								<Dismissable>
									{({ Dismiss }) => (
										<Notification type="success" variant="thin">
											<Dismiss />
											Thank you for subscribing!
										</Notification>
									)}
								</Dismissable>
							)}
						</InputGroup>
					)}

					<InputGroup>
						<LabelledInput
							variant={variant}
							label="Email"
							name="email"
							type="email"
							onChange={e => this.setState({ email: e.target.value })}
							value={this.state.email}
							required
						/>
					</InputGroup>
					<InputGroup>
						<LabelledCheckbox
							variant={variant}
							id="gdpr_37317"
							name={GDPR_NAME}
							value="Y"
							label={`
									If you are okay with us sending you updates
									via email, please check the box. Unsubscribe
									whenever you want!
								`}
						/>
					</InputGroup>
					{!simple && (
						<InputGroup>
							<Button
								block
								type="primary"
								buttonType="submit"
								loading={status === "sending"}
								disabled={status === "sending"}
							>
								Sign Up
							</Button>
						</InputGroup>
					)}

					{children}
				</form>
			</FormWrapper>
		);
	}
}

class NewsletterForm extends Component {
	static propTypes = {
		children: func,
		simple: bool,
	}

	render() {
    	const { children, simple } = this.props;
		
    	if (children) {
    		return (
    			<MailchimpSubscribe
    				url={URL}
    				render={({ subscribe, status, message }) => (
    					<Fragment>
							{children && children({
								subscribe, status, message, Form: ({ children, ...rest }) => (
									<Form
										{...{ subscribe, status, message, simple }}
										{...rest}
										children={children}
									/>
    						)})}
    					</Fragment>
    				)}
    			/>
    		);
    	}

    	return (
    		<MailchimpSubscribe
    			url={URL}
    			render={({ subscribe, status, message }) => (
    				<Fragment>
    					{!simple && (
    						<Fragment>
    							<Typography center type="h2" noMargin noPadding>
									Interesting Issues, Straight to Your Inbox
    								</Typography>
    							<Typography center type="text">
									We send you a weekly newsletter with open-source issues that need your help and programming articles to help you grow as a developer
    								</Typography>
    						</Fragment>
    					)}
    					<Form {...{ subscribe, status, message, simple }} />
    				</Fragment>
    			)}
    		/>
    	);
	}
}

export default NewsletterForm;
