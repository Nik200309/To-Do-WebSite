import React from 'react';

const ProfileButton = React.forwardRef((props, ref) => (
  <button ref={ref} profileBtn="true" onClick={props.onClick}>
    Кнопка профиля
  </button>
));

export default ProfileButton;