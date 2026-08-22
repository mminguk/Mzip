import { useState, useEffect } from 'react';

import '../../styles/Comments.css';
import CommentForm from './CommentForm';

export default function Comments({ postid }) {
  const [comments, setComments] = useState([]);

  async function addComment(comment) {
    const response = await fetch(`http://localhost:3000/comment/${postid}`, {
      method: 'POST',
      body: JSON.stringify({
        text: comment,
        postid: +postid,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const resData = await response.json();
    setComments((prev) => [...prev, resData]);
  }

  useEffect(() => {
    fetch(`http://localhost:3000/comment/${postid}`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <section className="comment-section">
      <h3>댓글</h3>

      <CommentForm addComment={addComment} />

      <div className="comment-list">
        {comments.map((comment) => (
          <div className="comment-item" key={comment.id}>
            <div className="comment-writer">000</div>

            <div className="comment-content">{comment.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
