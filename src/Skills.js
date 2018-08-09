import React from 'react';
import WOW from 'wowjs';

export default class Skills extends React.Component {

    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }

    render() {
        return(
            <div>
                    <div className="skills">
                        <div className="wow slideInLeft" data-wow-offset="10">
                            <div className="skills-title skills-highlight">
                                Skills
                            </div>
                        </div>
                        <div className="icons">
                            <span
                                class="devicon-javascript-plain colored skills-icon wow flipInY"
                                data-wow-iteration="1"
                                data-wow-offset="40"
                                data-wow-delay=".5s"
                            />
                            <span
                                class="devicon-react-original-wordmark colored skills-icon wow flipInY"
                                data-wow-iteration="2"
                                data-wow-offset="5"
                                data-wow-delay="2.5s"
                            />
                            <span
                                class="devicon-nodejs-plain-wordmark colored skills-icon wow flipInY"
                                data-wow-iteration="1.5"
                                data-wow-offset="40"
                                data-wow-delay="1.5s"
                            />
                            <span
                                class="devicon-express-original-wordmark colored skills-icon wow flipInY"
                                data-wow-iteration="1"
                                data-wow-offset="40"
                                data-wow-delay="3s"
                            />
                            <span
                                class="devicon-mongodb-plain-wordmark colored skills-icon wow flipInY"
                                data-wow-iteration="1"
                                data-wow-offset="40"
                                data-wow-delay="2s"
                            />
                            <span
                                class="devicon-git-plain-wordmark colored skills-icon wow flipInY"
                                data-wow-iteration="1"
                                data-wow-offset="40"
                                data-wow-delay="1s"
                            />
                        </div>
                    </div>
            </div>
        )
    }
}