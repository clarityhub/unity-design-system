/* @jsx jsx */

import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { arrayOf, node, shape, func } from 'prop-types';

import Box from '../../scaffolding/Box';
import Layout from '../../scaffolding/Layout';
import { FlexGrid, FlexColumn } from '../../scaffolding/FlexGrid';
import { Card, CardBody } from '../../components/Card';
import Typography from '../../components/Typography';
import Button from '../../components/Buttons';

import colors from '../../theme/colors';

const Section = styled.div`
    flex: 1;
    padding: 3rem;
    max-width: 520px;

    ${Card} + ${Card} {
        margin-top: 1rem;
    }
`;

const AuthTemplate = ({ newsFeed, onSignUp, onLogin }) => (
    <Layout>
        <FlexGrid>
            <FlexColumn css={css`
                background: ${colors.gradient};
            `}>
                <Section css={css`
                    margin-left: auto;
                `}>
                    {newsFeed.map((item, i) => (
                        <Card key={i} noBorder>
                            <CardBody>
                                <Typography type="h3">{item.title}</Typography>
                                <Typography type="text">
                                    {item.content}
                                </Typography>
                            </CardBody>
                        </Card>
                    ))}
                </Section>
            </FlexColumn>
            <FlexColumn>
                <Section css={css`
                    background-color: ${colors.dove};
                `}>
                    <Typography
                        center
                        noMargin
                        noPadding
                        type="h2"
                    >
                        Welcome to Clarity Hub
                    </Typography>
                    
                    <Box withGutterTop>
                        <Button type="primary" block onClick={onSignUp}>
                            Sign Up
                        </Button>

                        <Typography center css={css`
                            margin-top: 3rem;
                            margin-bottom: 1rem;
                        `}>
                            Already have an account?
                        </Typography>

                        <Button type="primary" outline block onClick={onLogin}>
                            Login
                        </Button>
                    </Box>
                </Section>
            </FlexColumn>
        </FlexGrid>
    </Layout>
);

AuthTemplate.propTypes = {
    newsFeed: arrayOf(shape({
        title: node,
        content: node,
    })).isRequired,
    onSignUp: func.isRequired,
    onLogin: func.isRequired,
};

export default AuthTemplate;
