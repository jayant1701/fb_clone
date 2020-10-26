import React from 'react'
import './Widget.css'
import ScriptTag from 'react-script-tag'

function Widget() {
    return (
        <div class="widget">
            <ScriptTag type="text/javascript" 
                       src="https://platform.linkedin.com/badges/js/profile.js"    
                       async defer/>

            <div class="LI-profile-badge"  
                 data-version="v1" 
                 data-size="medium" 
                 data-locale="en_US" 
                 data-type="vertical" 
                 data-theme="light"
                 data-vanity="jayant-barak-191028191">

                  <a class="LI-simple-link" href='https://in.linkedin.com/in/jayant-barak-191028191?trk=profile-badge'></a>
            </div>
        </div>
    )
}

export default Widget









