import {
	Card,
	Rate
} from 'antd';
import React, {
	useEffect, useMemo, useState
} from 'react';
import styles from './index.module.scss';
import {
	FireOutlined, HomeOutlined, StarOutlined
} from '@ant-design/icons';
import {
	IDealBase
} from '../../interfaces/deal';
import {
	createUseStyles
} from 'react-jss';
import {
	ModuleReference
} from 'typescript';
import bg from '../../images/bg-cairns.png';

interface DealCardProps {
	deal: IDealBase;
}

/**
 * @description A card shows the details of a deal
 * @param {IDealBase} deal the deal data to be displayed
 */
const DealCard: React.FC<DealCardProps> = ({ deal }) => {

	// const priceAndDetails
	// const priceAndSloganWithoutRatings
	// const noPrice
	
	const useStyles = createUseStyles({
		card: {
			backgroundImage: `url(${bg})`, // could be cloudinary urls ${deal.backgroundImage.secure_url}
		}
	});
	const classes = useStyles();
	
	const renderCardFooter = (date: number, link: string): JSX.Element => {
		return (
			<div className={styles['card__footer-container']}>
				<FireOutlined />
				{!!date && <span className={styles['card__footer-date']}>
					Deal expires in {date ? date : ''} days
				</span>}
				<a href={link ? link : '#'}>
					<span className={styles['card__footer-link']}>View</span>
				</a>
			</div>
		)
	};

	const price = ['From', '$'].concat(deal.startingPrice.toString().split(''));
	
	return (
		<div className={styles['card-wrapper']}>
			<div className={`${styles['card']} ${classes.card}`}>
				<h1 className={styles['card__title']}>
					<span className={styles['card__title-text']}>
						{deal.title}
					</span>
				</h1>
				<div className={styles['card__price']}>
					{price.map((item, i) => (
						<span key={i} className={styles['card__price-number']}>
							<div className={styles['card__price-container']}>{item}</div>
							<div className={styles['card__price-decoration']}>
								<section>I</section>
								<section>I</section>
							</div>
						</span>
					))}
				</div>
				<div className={styles['card__slogan']}>
					{deal.details.map((item, i) => (
						<h3 key={i} className={styles['card__slogan-details']}>{item}</h3>
					))}
					<div className={styles['card__info']}>
						<HomeOutlined />
						<span className={styles['card__info-text']}>{deal.numberOfNights}</span>
						<span className={styles['card__info-ratings']}>
							{/* should be using rating components such as antd Rate*/}
							<StarOutlined />
							<StarOutlined />
							<StarOutlined />
							<StarOutlined /> 
						</span>
					</div>
					<div className={styles['card__disclaimer']}>
						*Price per person. Terms & conditions apply
					</div>
				</div>
			</div>
			<div className={styles['card__footer']}>
				{renderCardFooter(deal.expiryDate, deal.link)}
			</div>
		</div>
	)
}

export default DealCard;
