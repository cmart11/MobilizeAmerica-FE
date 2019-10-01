import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

import { Navbar } from './';

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('Navbar', () => {
    it('renders all the ul tags', () => {
        const navbar = shallow(<Navbar />);
        expect(navbar.find('ul')).to.have.length(1);
    });
    it('renders all the li tags', () => {
        const navbar = shallow(<Navbar />);
        expect(navbar.find('li')).to.have.length(2);
    });
});
