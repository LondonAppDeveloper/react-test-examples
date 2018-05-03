/** Component */

import React from 'react';
import PropTypes from 'prop-types';


const GetGitHubUserForm = (props) => {
  return (
    <div>
      <input name="username" placeholder="Username" onChange={props.onChange} />
      <button onClick={props.onClick} />
    </div>
  );
};

GetGitHubUserForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default GetGitHubUserForm;
