import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', border: '#02050D solid 15px', backgroundColor: '#F2F3F2', height: '700px', width: '75%', margin: 'auto' }}>
            {props.children}
        </div>
    )

};

export default Scroll;