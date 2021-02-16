import React from 'react'

const STYLES = ['btn--fill', 'btn--outline', 'btn--rounded'];

const SIZES = ['btn--medium', 'btn--large', 'btn--wide', 'btn--small', 'btn--mobile'];

const COLOR = ['btn--primary', 'btn--secondary', 'btn--red', 'btn--green', 'btn--black', 'btn--white', 'btn--inverse'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor,
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSizes = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSizes} ${checkButtonColor}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )

};