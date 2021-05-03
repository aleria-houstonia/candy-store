import React from "react";
import "./Comments.css";

const Comments = () => {
    return (
        <>
            <div className="coment">
                <h2 className="text"> Social Sharing</h2>
                <h3 className="text_item"> From Our Events</h3>
            </div>
            <div className="coment__item">
                <div className="coment__foto">
                    <img src="data:image/jpeg;base64,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" />
                </div>
                <div className="coment__text">
                    <p>
                        Lara will also be with us, and possibly my mother - Rita
                        Kohn, as well.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Comments;
