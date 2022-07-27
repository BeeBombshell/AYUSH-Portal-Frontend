import "./homeTopCard.css";
import { useState } from 'react';

const HomeTopCard = () => {
    const [CardData, setCardData] = useState([
        {
            index: 1,
            date: "22-Apr-2022",
            title: "Host Country Agreement between...",
            description: "Ministry of Ayush has signed the Host Country Agreement with World Health Organization on 26th March 2022 for establishing WHO-GCTM (Global Centre for Traditional Medicine) in India at",
            buttonText: "Ayurveda",

        },
        {
            index: 2,
            date: "13-Apr-2022",
            title: "CCRUM Organises National Sem...",
            description: "Unani Medicine is flourishing well in India and it is satisfying that we are partners in the development of this medical system, said Prof. Mohammad Afshar Alam, Vice Chancellor, Jamia Hamdard,",
            buttonText: "Unani",
        },
        {
            index: 3,
            date: "03-May-2022",
            title: "Research about Homeopathy..",
            description: "High homeopathic dilutions are reported to be effective both in humans and animal/in vitro models. · Methodological problems in clinical trials ...",
            buttonText: "Conference",
        }
    ])

    const CardList = CardData.map((card) => {
        return (
            <div key={card.index} className="card-container">
                <div className="card-content">
                    <div className="card-stripe"></div>
                    <div className="card-date">{card.date}</div>
                    <div className="card-title">{card.title}</div>
                    <div className="card-description">{card.description}</div>
                    <div className="card-bottom">
                        <div type="button" className="cards-button">{card.buttonText}</div>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="card-flex">
            {CardList}
        </div>
    )
}

export default HomeTopCard;