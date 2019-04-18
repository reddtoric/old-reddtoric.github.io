import React from 'react';

import './Avatar.sass';

export default({user}) => (
    <img className="avatar" src={user.avatarUrl} alt={user.name} />
)