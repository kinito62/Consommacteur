import React from "react"

export default function ContainerSmall(props) {

    
		return (
            <div className='layoutForm'>
            <div className="container">
            <div className="titleForm">
                <a>{props.title}</a>
                </div>
                {props.children}
            </div>
            </div>
        )
    
}