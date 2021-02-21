import React, {
	useEffect, useMemo, useState
} from 'react';
import {
	IDealBase
} from '../../interfaces/deal';
import DealCard from './DealCard';
import styles from './index.module.scss';
interface DealCardListProps {
	deals?: Array<IDealBase>; //should not be optional
}

/**
 * @description Smart component fetching all deal data and send to individual deal card component
 * @param {Array<IDealBase>} deals the deal data to be sent to DealCard
 */

const DealCardList: React.FC<DealCardListProps> = ({}): JSX.Element => {

	// useEffect(
	// 	() => {
	// 		init();
	// 		if () {
	// 			dispatch {
	// 				type: 'deal/fetchDeals',
	// 				payload: payload
	// 			}
	// 		}
	// 	},
	// 	[deps]
	// );

	// demo deal
	const currentDeal: IDealBase = {
		title: 'FREE DATE CHANGES',
		startingPrice: 1360,
		slogan: 'Wake up and go',
		backgroundImage: '../../images/bg-cairns.png', // should be cloudinary urls
		rating: 4,
		numberOfNights: 3,
		Logos: ['a', 'b'],
		link: 'string',
		details: ['Gold Coast', 'Mini Break'],
		expiryDate: 8
	}   
	// demo array of deals (simulating api result)
	const deals: Array<IDealBase> = [currentDeal, currentDeal, currentDeal, currentDeal, currentDeal, currentDeal];

	return (
		<div className={styles['deal-list']}>
			{deals.map((item, i)=> (
				<DealCard key={i} deal={item} />
			))}
        </div>
	)
}

export default DealCardList;
