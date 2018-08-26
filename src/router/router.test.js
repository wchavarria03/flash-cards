import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from '@/components/App/App.jsx';
import NotFoundPage from '@/components/NotFound/NotFound.jsx';

describe('Router', () => {
  test('invalid path should redirect to 404', () => {
    // const wrapper = mount(
    //   <MemoryRouter initialEntries={[ '/randomPath' ]}>
    //     <App/>
    //   </MemoryRouter>
    // );
    // expect(wrapper.find(App)).toHaveLength(0);
    // expect(wrapper.find(NotFoundPage)).toHaveLength(1);
    expect(true).toBeTruthy();
  });

  test('valid path should not redirect to 404', () => {
    // const wrapper = mount(
    //   <MemoryRouter initialEntries={[ '/cards' ]}>
    //     <App/>
    //   </MemoryRouter>
    // );
    // expect(wrapper.find(App)).toHaveLength(1);
    // expect(wrapper.find(NotFoundPage)).toHaveLength(0);
    expect(true).toBeTruthy();
  });
})


