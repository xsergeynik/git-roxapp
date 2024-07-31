
import React from 'react';
import PropTypes from 'prop-types';

const MainHeader = props => {
    const { title, id, phone } = props;
    return (
        <>
            <div className="cart-user">
                <h2>{title},{id}</h2>
                <div>phone <a href={`tel:${phone}`} > +380{phone}</a></div>
                
            </div>
        </>
    );
};

MainHeader.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number,
    phone: PropTypes.string
};

export default MainHeader;