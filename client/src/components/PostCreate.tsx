import React, { FormEvent, ChangeEvent } from 'react';
import { useState } from 'react';

export default function PostCreate() {
  const [postInputText, setPostInputText] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPostInputText(event.target.value);
  };

  const handlePostSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(postInputText);
  };

  return (
    <div>
      <form onSubmit={handlePostSubmit} className="form-group">
        <label htmlFor="post-title">Title</label>
        <input
          id="post-title"
          type="text"
          onChange={handleInputChange}
          className="form-control"
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
