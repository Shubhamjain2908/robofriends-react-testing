import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

it('expect to render MainPage component', () => {
    const mockStore = {
        robots: [],
        searhField: ''
    }
    expect(shallow(<MainPage store={mockStore}/>)).toMatchSnapshot();
})