import React, { Component } from 'react';
import offers from '../../data/components/offers.json'
import '../../css/offers.css'
export default class Offers extends React.Component {

   

    render() {
		return (
            <div className="container">
                <div className="titleForm">
                    <a>Nos Offres</a>
                </div>
                <div className='layoutOffers'>

                        {offers.data.map(offer => (
                                <div className='offerContainer' key={offer.id}>
                                    <div className="cardTitleOffer">{offer.name}</div>
                                        <div className="cardImgsOffer"> 
                                            <img className="cardImgOffer" src={`../../img/offers/${offer.photo[0]}.webp`} />
                                            <img className="cardImgOffer" src={`../../img/offers/${offer.photo[1]}.webp`} />
                                        </div>
                                    <p className="card_text">{offer.description}</p>
                                    <div className='row'>
                                        <div className="col-1">
                                            <div className="priceOffer">{offer.price} €</div>
                                        </div>
                                        <div className="col-2">
                                            <button className="buyOffer">J'achète</button>
                                        </div>
                                    </div>
                                    
                            </div>
                        ))}
                    
                </div>
            </div>
        )
    }
}