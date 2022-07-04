import "./homeTop.css"
import bgimage from '../../assets/images/3d-medical.jpg'

function HomeTop() { 
    return (
        <div className='homeTop-container'>
            <img className='homeTop-img' src={bgimage} />
            <div className='homeTop-bg'></div>
            <div className='homeTop-right'>
                <div className="right-content">
                    <div className="right-title">Ayush Global</div>
                    <div className="right-description">is wholly capable of satisfying the therapeutic demands of this age better than any other system or school of medicine.</div>
                    <button type="button" className="btn btn-outline-primary">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default HomeTop