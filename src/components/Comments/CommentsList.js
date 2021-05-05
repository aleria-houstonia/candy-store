import React, { useContext, useEffect, useState } from "react";
import { Comment } from "semantic-ui-react";
import { commentContext } from "../../contexts/CommentContext";
import { useAuth } from "../../contexts/AuthContext";
import "./Comments.css";
const CommentsList = () => {
    const [editTask, setEditTask] = useState("");
    const { currentUser } = useAuth();
    const [editInputId, setEditInputId] = useState("");
    const { saveTopic, getComment, deleteComment, commentData } = useContext(
        commentContext
    );
    const getNewName = (e) => {
        setEditTask(e.target.value);
        setEditInputId(e.target.id);
    };

    useEffect(() => {
        getComment();
    }, []);
    const createNewArr = (index, id) => {
        const editedTask = {
            text: editTask,
            id: editInputId,
        };
        saveTopic(id, editedTask);
        getComment();
        document.querySelector("#k" + id).style.display = "none";
    };

    return (
        <ul>
            {commentData.map((item, index) => (
                <div>
                    <Comment>
                        <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
                        <Comment.Content>
                            <Comment.Author as="a" style={{ color: "black" }}>
                                {item.author}
                            </Comment.Author>
                            <Comment.Metadata>
                                <div>{item.now}</div>
                            </Comment.Metadata>
                            <Comment.Text>{item.text}</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>
                                    {(currentUser &&
                                        currentUser.uid === item.uid) ||
                                    (currentUser &&
                                        currentUser.uid ===
                                            "UBKmT34gMPQtgu0n2iitDamoqk43") ? (
                                        <div style={{ display: "flex" }}>
                                            {" "}
                                            <button
                                                className="delete-btn comment-buttons"
                                                onClick={() =>
                                                    deleteComment(item.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                            <br />
                                            <button
                                                className="edit-btn comment-buttons"
                                                onClick={(e) => {
                                                    document.querySelector(
                                                        `#k${item.id}`
                                                    ).style.display = "block";
                                                }}
                                            >
                                                Edit
                                            </button>
                                        </div>
                                    ) : null}{" "}
                                </Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                    <div
                        id={"k" + item.id}
                        className="edit-input"
                        style={{ display: "none" }}
                    >
                        <input
                            className="inp-name"
                            id={item.id}
                            type="text"
                            onChange={getNewName}
                        />
                        <br />

                        <button
                            onClick={() => createNewArr(index, item.id)}
                            className="save-btn"
                        >
                            Save
                        </button>
                    </div>
                </div>
            ))}
        </ul>
    );
};

export default CommentsList;
