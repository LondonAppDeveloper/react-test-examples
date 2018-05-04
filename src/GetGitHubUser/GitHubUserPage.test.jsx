import React from 'react';

import { shallow } from 'enzyme';

import GitHubUserPage from './GitHubUserPage';


function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}


it('sets isLoading to true when loading', async () => {
  global.fetch = jest.fn().mockReturnValue(Promise.resolve({
    ok: true,
    json: () => Promise.resolve({'user': 'test'})
  }));

  const c = shallow(<GitHubUserPage />);
  c.find('GetGitHubUserForm').prop('onClick')();

  expect(c.instance().state.isLoading).toEqual(true);
  await flushPromises();
  expect(c.instance().state.isLoading).toEqual(false);
});

it('calls api for correct username', () => {
  global.fetch = jest.fn().mockReturnValue(Promise.resolve({
    ok: true,
    json: () => Promise.resolve({'user': 'test'})
  }));

  const c = shallow(<GitHubUserPage />);
  c.find('GetGitHubUserForm').prop('onChange')({
    target: {name: 'username'}}, 'chandler'
  );
  c.find('GetGitHubUserForm').prop('onClick')();
  expect(global.fetch).toBeCalledWith('https://api.github.com/users/chandler');
});
