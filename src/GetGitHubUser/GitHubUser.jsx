import React from 'react';
import PropTypes from 'prop-types';


const GitHubUser = (props) => {
  return (
    <div>
      {
        props.loading
         ? <span>Loading&hellip;</span>
         : <span>{JSON.stringify(props.user)}</span>
      }
    </div>
  )
}

GitHubUser.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
}

export default GitHubUser;
