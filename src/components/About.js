import React from 'react'

function About(props) {
    return (
        <div>
            <div class={`px-4 py-5 my-5 text-center text-${props.mode === 'dark' ? 'light' : 'dark'}`}>

                <h1 class="display-5 fw-bold">About us</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>

                </div>
            </div>
        </div>
    )
}

export default About
