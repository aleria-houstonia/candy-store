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
                {/* {comments.map((comment) => ( */}
                <Comment>
                    <Comment.Avatar
                        as="a"
                        src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                    />
                    <Comment.Content>
                        <Comment.Author>comment.email</Comment.Author>
                        <Comment.Metadata>
                            <div>comment.createdAt</div>
                        </Comment.Metadata>
                        <Comment.Text>
                            <p>{comment.text}</p>
                        </Comment.Text>
                    </Comment.Content>
                </Comment>
                {/* ))} */}
                <Form reply>
                    <Form.TextArea />
                    <TextField
                        variant={"outlined"}
                        fullWidth
                        rowsMax={2}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <Button
                        onClick={sendComment}
                        content="Add Comment"
                        labelPosition="left"
                        icon="edit"
                        primary
                    />
                </Form>
            </Comment.Group>
        </>
    );
};

export default Comments;
