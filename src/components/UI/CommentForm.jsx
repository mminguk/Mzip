import '../../styles/CommentForm.css';

export default function CommentForm({ addComment }) {
  async function submitHandler(e) {
    e.preventDefault();
    const comment = e.target.comment.value;
    // await fetch('http://localhost:3000/comment', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     comment: e.target.comment.value,
    //     postid: +id,
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });

    addComment(comment);
    e.target.comment.value = '';
  }

  return (
    <form className="comment-write" onSubmit={submitHandler}>
      <input type="text" name="comment" placeholder="댓글을 입력하세요." />

      <button type="submit">작성</button>
    </form>
  );
}
