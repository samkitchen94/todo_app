import React from 'react';

function About() {
    return(
        // React fragment added instead of div as nothing needs to be rendered in the DOM
        <React.Fragment>
            <h1>About</h1>
            <p>
                <br></br>
                This is the todo list about page, not really much to put in here at the moment but i've added it for the purposes of understanding how react router works!
            </p>
        </React.Fragment>
    )
}

export default About;