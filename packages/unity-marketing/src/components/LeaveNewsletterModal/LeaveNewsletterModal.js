import React, { Component, Fragment } from 'react';
import { bool } from 'prop-types';
import Modal from '@clarityhub/unity-web/lib/components/Modals';
import { CardBody } from '@clarityhub/unity-web/lib/components/Card';
import Button, { ButtonSet } from '@clarityhub/unity-web/lib/components/Buttons';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import InputGroup from '@clarityhub/unity-web/lib/forms/InputGroup/InputGroup';

import LeaveIntent from '../../interactions/LeaveIntent';
import NewsletterForm from '../NewsletterForm';

export default class LeaveNewsLetterModal extends Component {
    static propTypes = {
    	force: bool,
    }

    render() {
    	const { force } = this.props;

    	return (
    		<LeaveIntent force={force}>
    			{({ show, onDismiss }) => (
    				<Modal
    					onClose={onDismiss}
    					type="notification"
    					open={show}
    				>
    					<CardBody>
    						<NewsletterForm simple>
    							{({ status, Form, subscribe }) => (
    								<Fragment>
    									{/* XXX share this text somehow */}
    									<Typography color="white" center type="h2" noMargin noPadding>
                                                Interesting Issues, Straight to Your Inbox
    									</Typography>
    									<Typography color="white" center type="text">
                                                We send you a weekly newsletter with open-source issues that need your help and programming articles to help you grow as a developer
    									</Typography>

    									<Form variant="white">
    										<InputGroup>
    											<ButtonSet spread>
    												<Button
    													text
    													type="white"
    													onClick={onDismiss}
    												>
                                                        No Thanks
    												</Button>
    												<Button
    													type="white"
    													buttonType="submit"
    													loading={status === "sending"}
    													disabled={status === "sending"}
    													onClick={subscribe}
    												>
                                                        Sign Up
    												</Button>
    											</ButtonSet>
    										</InputGroup>
    									</Form>
    								</Fragment>
    							)}
    						</NewsletterForm>
    					</CardBody>
    				</Modal>
    			)}
    		</LeaveIntent>
    	);
    }
}