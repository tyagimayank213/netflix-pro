import React from 'react'
import './PlanScreen.css'

function PlanScreen() {
    return (
        <div>
            <div className="planScreen__plan">
                <div className="planScreen__info">
                    <h5>Basic</h5>
                    <h6>720p</h6>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="planScreen__plan">
                <div className="planScreen__info">
                    <h5>Standard</h5>
                    <h6>1020p</h6>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="planScreen__plan">
                <div className="planScreen__info">
                    <h5>Premium</h5>
                    <h6>4k + HDR</h6>
                </div>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default PlanScreen
