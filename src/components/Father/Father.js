import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({house}) => {
    return (
        <div>
            <h5>Father</h5>
            <p>House: {house}</p>
            <MySelf house={house}></MySelf>
            <Brother house={house}></Brother>
            <Sister house={house}></Sister>
        </div>
    );
};

export default Father;