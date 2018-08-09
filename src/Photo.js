import React from 'react';
import photo from './photo.jpg';
import WOW from 'wowjs';

export default class Photo extends React.Component {

componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();

}

    render() {
        return(<div className="photo">
            <div className="wow rotateInDownRight">
                <img src={photo} alt= " "/>
            </div>
        </div>
        )
    }

}