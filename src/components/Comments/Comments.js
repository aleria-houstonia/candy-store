import React, { useState } from "react";
import "./Comments.css";
import { auth, firestore } from "../../helpers/base";
import { useAuth } from "../../contexts/AuthContext";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase";

import { Button, Comment, Form } from "semantic-ui-react";
import { TextField } from "@material-ui/core";
const Comments = () => {
    const { currentUser } = useAuth();
    const [comment, setComment] = useState("");
    const [comments, loading] = useCollectionData(
        firestore.collection("comments").orderBy("createdAt")
    );

    const sendComment = async () => {
        firestore.collection("comments").add({
            uid: currentUser.displayName,
            email: currentUser.email,
            text: comment,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setComment("");
        console.log(comments);
    };

    return (
        <>
            <Comment.Group>
                {console.log(comments)}

                <Comment>
                    <Comment.Avatar
                        className="avatar"
                        src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                    />
                    <Comment.Content>
                        <Comment.Author>
                            <h4 className="author">Your email </h4>
                        </Comment.Author>
                        <Form.TextArea className="enter__text" />
                        <Comment.Metadata>
                            <h4 className="author">Create your comments</h4>
                        </Comment.Metadata>
                        <Form.TextArea
                            className="enter__text"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />

                        <Comment.Text>
                            <p>{comment.text}</p>
                        </Comment.Text>
                    </Comment.Content>
                    <Form reply>
                        <Button
                            className="btn__comment"
                            style={{
                                fontSize: "20px",
                                border: "2px solid black",
                            }}
                            onClick={sendComment}
                            content="Add Comment"
                        ></Button>
                    </Form>
                </Comment>
            </Comment.Group>

            {/* <Form reply>
                    <Form.TextArea className="enter__text" />
                    <TextField
                        variant={"outlined"}
                        fullWidth
                        rowsMax={2}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    /> */}
            {/* <Button
                        onClick={sendComment}
                        content="Add Comment"
                        labelPosition="left"
                        icon="edit"
                        primary
                    /> */}
            {/* </Form>
            </Comment.Group> */}
        </>
    );
};

export default Comments;
