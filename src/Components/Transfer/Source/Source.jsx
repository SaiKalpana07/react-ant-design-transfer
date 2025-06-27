import React from "react";
import PropTypes from 'prop-types'
import data from '../../../data.json'

function Source({source}) {

    return (
        <>
        <div className="source-container">
            <div className="source-header">
                <div className="source-checkbox">
                    <input type="checkbox"/>
                </div>
                <div className="dropdown-wrapper">
                    <div className="source-dropdown">
                    <img src={downArrow} alt="Dropdown" className="dropdown-icon" />

                    </div>
                </div>
                <div className="source-items-count">
                <p>{source.length} items</p>
                </div>
                <div className="source-label">
                 <p>{sourceLabel}</p>
        </div>
            </div>
            <hr className="divider" />


        </div>
        </>
    )

}

Source.propTypes = {
    source: PropTypes.array
}

export default Source;