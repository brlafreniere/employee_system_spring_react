import React from "react"

const Card = (props: any) => {
    return (
        <div className="border border-top-0 shadow">
            <div className="card-body p-5">
                {props.children}
            </div>
        </div>
    )
}

export default Card