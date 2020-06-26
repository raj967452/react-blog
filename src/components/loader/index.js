import React from 'react';

const Loader = () => {
    return (
        <div className="d-flex justify-content-center" style={spinner}>
            <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="sr-only">Loading...</span>
            </div></div>
    );
};

const spinner = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginLeft: '-32px',
    marginTop: '-32px',
    width: '64px',
    height: '64px',
    zIndex: '10',
    borderRadius: '5px'
}
export default Loader;