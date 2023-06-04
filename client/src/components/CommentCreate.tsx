import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
export default function CommentCreate(postId: string) {
  const [commentInput, setCommentInput] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentInput(event.target.value);
    console.log(commentInput);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const content = commentInput;
    const response = await axios.post(
      `http://localhost:4001/posts/${postId}/comments`,
      { content }
    );
    console.log('Comment created:', response.data, postId);

    setCommentInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-group">
        <label htmlFor="">New comment</label>
        <input
          onChange={handleChange}
          className="form-control"
          type="text"
          placeholder="Add a comment"
          value={commentInput}
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
