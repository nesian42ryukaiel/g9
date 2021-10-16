import React from "react";

export default function MemberInput() {
  return (
    <>
      <div>
        <input
        type='text' className='user_id--input'
        placeholder='ID'
        />
      </div>
      <div>
        <input
        type='text' className='password--input'
        placeholder='Password'
        />
      </div>
    </>
  );
}