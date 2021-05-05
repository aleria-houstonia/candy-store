import { TextField } from "@material-ui/core";
import { CommentSharp } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { commentContext } from "../../contexts/CommentContext";
import { useAuth } from "../../contexts/AuthContext";
import "./Comments.css";
const CommentsAdd = () => {
    const { currentUser } = useAuth();
    const { postNewComment } = useContext(commentContext);
    const [com, setCom] = useState({
        text: "",
        author: "",
    });
    const handleValues = (e) => {
        let newComment = {
            ...com,
            text: e.target.value,
            author: currentUser.email,
            uid: currentUser.uid,
            now: new Date().toLocaleString(),
        };
        setCom(newComment);
    };
    const sendComment = () => {
        postNewComment(com);
        setCom({
            text: "",
        });
    };
    return (
        <div>
            <Form reply>
                {/* <Form.TextArea /> */}
                <TextField
                    variant={"outlined"}
                    fullWidth
                    rowsMax={2}
                    value={com.text}
                    onChange={(e) => handleValues(e)}
                />

                <Button
                    className="comment-button"
                    onClick={sendComment}
                    content="Add Comment"
                    labelPosition="left"
                    icon="edit"
                    primary
                />
            </Form>
        </div>
    );
};

export default CommentsAdd;