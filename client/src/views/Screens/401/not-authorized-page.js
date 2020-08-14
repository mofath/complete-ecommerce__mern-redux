import React from 'react'


import '../style/not-authorized-page.css'

function NotAuthorizedPage() {
    return (
        <div className="not-authorized-page-container vertical-layout ">
            <div className="block1">401</div>
            <div className="block2">ACCESS DENIED</div>
            <div className="block3">You are not authorized to view this page</div>
            <div className="block4"><button>Click HERE </button> to go back.</div>
        </div>
    )
}

export default NotAuthorizedPage;