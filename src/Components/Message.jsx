import React from 'react'

const Message = ({ message, bgColor }) => {
    let styles = {
        padding: "0.5rem",
        marginBottom: "1rem",
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: bgColor
    }
    return (
        <div style={styles} >
            {/* Accepts innerHTML from (Not recommended) */}
            <h2> <p dangerouslySetInnerHTML={{ __html: message }} /> </h2>
        </div>
    )
}

export default Message
