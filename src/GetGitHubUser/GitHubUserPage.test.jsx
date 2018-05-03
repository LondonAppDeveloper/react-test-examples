import React from 'react';

import { shallow } from 'enzyme';

import GitHubUserPage from './GetGitHubUserPage';


it('sets isLoading to true when loading', () => {
  global.fetch = jest.fn().mockReturnValue(Promise.resolve({
    ok: true,
    json: () => Promise.resolve({'user': 'test'})
  }));

  const c = shallow(<GitHubUserPage />);

  c.instance().getUser().then(() => {
    expect(c.instance().state.isLoading).toEqual(false);
  });
  expect(c.instance().state.isLoading).toEqual(true);
});
