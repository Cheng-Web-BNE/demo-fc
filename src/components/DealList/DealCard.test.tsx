import React from 'react';
import { render, screen } from '@testing-library/react';
import DealCard from './DealCard';
import { IDealBase } from '../../interfaces/deal';
import ReactDOM from 'react-dom';

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
test('renders learn react link', () => {
    render(<DealCard deal={currentDeal}/>);
    const linkElement = screen.getByText(/Deal expires/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DealCard deal={currentDeal} />, div);
    ReactDOM.unmountComponentAtNode(div);
});