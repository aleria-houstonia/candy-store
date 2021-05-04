import React from "react";
import "./Comments.css";
import { Button } from "@material-ui/core";

const Comments = () => {
    return (
        <>
            <div className="form_card_elem">
                <div className="coment_text">
                    <h2 className="text">
                        <strong>Social Sharing </strong>{" "}
                    </h2>
                    <h3 className="text_item">
                        <em>
                            <b>From Our Events </b>{" "}
                        </em>{" "}
                    </h3>
                </div>
                <div className="form_card">
                    <form className="form__card">
                        {/* <label for="name">Your name </label>
                    <br></br>
                    <div className="text__inp_item">
                    <input type="text" name="name" id="name" />
                </div> */}

                        <br></br>
                        <label for="comment">Your comments</label>
                        <br></br>
                        <div className="text__inp">
                            <textarea
                                required
                                placeholder="enter your text"
                                name="comment"
                                id="comment"
                            ></textarea>
                        </div>
                        <div className="btn_inp">
                            <Button
                                style={{
                                    fontSize: "20px",
                                    border: "2px solid black",
                                    width: "300px",
                                }}
                            >
                                Send
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Comments;
