import './homeMid.css';
import ayurveda from '../../assets/images/ayurveda.png'

function HomeMid() {
    return (
        <div className="homeMid-container">
            <div className="homeMid-heading">
                <div className="homeMid-headingBlock"></div>
                <div className="homeMid-headingText">About Ayush Global</div>
            </div>
            <div className="homeMid-headingDivider"></div>
            <div className="homeMid-content">
                <div className="homeMid-textBlock">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis sed dignissim nam quam sed amet ultrices. Quisque nunc in pellentesque sociis amet quam mauris pulvinar. Eget diam id quis nam posuere sem quis rhoncus imperdiet.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis sed dignissim nam quam sed amet ultrices. Quisque nunc in pellentesque sociis amet quam mauris pulvinar. 
                </div>
                <div type="button" className="homeMid-button">Read More</div>
                <img className="homeMid-imgBlock" src={ayurveda} alt="HomeMid-ImageBlock"></img>
            </div>
        </div>
    )
}

export default HomeMid;