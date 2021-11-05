import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Radio.css";

export class RadioButton extends Component {
    state = {};

    render() {
        const { selected, onChange, onChoose, text, value, imgSrc, children } = this.props;
        return (
            <div
                className="modern-radio-container"
                onClick={() => {
                    onChange(value);
                    setTimeout(()=>{
                        onChoose();
                    },500)
                }}
            >
                <div className={`form-icon ${value !== selected? "":"selected"}`}>
                    <img alt='image' src={imgSrc} />
                </div>
                <div className="helper-text">{text}</div>
                {children}
            </div>
        );
    }
}

RadioButton.propTypes = {
    onChange: PropTypes.func.isRequired,
    onChoose: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};