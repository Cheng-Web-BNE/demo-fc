import React from 'react';
import DealCard from './DealCard';
import {
    IDealBase
} from '../../interfaces/deal';
import ReactDOM from 'react-dom';
import DealCardList from '.';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// demo deal
const currentDeal: IDealBase = {
    title: 'FREE DATE CHANGES',
    startingPrice: 1360,
    slogan: 'Wake up and go',
    backgroundImage: '../../images/bg-cairns.png',
    rating: 4,
    numberOfNights: 3,
    Logos: ['a', 'b'],
    link: 'string',
    details: ['Gold Coast', 'Mini Break'],
    expiryDate: 8
}   
// demo array of deals (simulating api result)
const deals: Array<IDealBase> = [currentDeal, currentDeal, currentDeal, currentDeal, currentDeal, currentDeal];

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DealCardList deals={deals} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('', () => {
    const wrapper = shallow(<DealCard deal={currentDeal} />);

    const text = wrapper.text();

    it('renders the title', () => {
        expect(text).toMatch(/FREE DATE CHANGES/);
    });
});