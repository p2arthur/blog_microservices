import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';

interface propsInterface {
  postId: string;
}

export default function CommentCreate({ postId }: propsInterface) {
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
    console.log('post id:', postId);
    console.log('Comment created:', response.data);

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
