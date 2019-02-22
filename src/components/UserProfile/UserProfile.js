import React from 'react';
import styled from '@emotion/styled';

import Avatar from '../Avatar';
import { Menu } from '../Menu';

const NoStyleButton = styled.button`
    background: transparent;
    border: 0;
    cursor: pointer;
    padding: 0;
`;

const UserProfile = ({ avatarUrl, avatarFallbackUrl, menuItems }) => (
    <Menu items={menuItems}>
        {({ open }) => (
            <NoStyleButton onClick={open}>
                <Avatar url={avatarUrl} fallbackUrl={avatarFallbackUrl} />
            </NoStyleButton>
        )}
    </Menu>
);

export default UserProfile;
