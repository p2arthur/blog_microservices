import React, { FormEvent, ChangeEvent } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function PostCreate() {
  const [postInputText, setPostInputText] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPostInputText(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPostInputText('');
    console.log(postInputText);
    await axios.post('http://localhost:4000/posts', { title: postInputText });

    console.log(postInputText);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-group">
        <label htmlFor="post-title">Title</label>
        <input
          id="post-title"
          type="text"
          value={postInputText}
          onChange={handleChange}
          className="form-control"
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
