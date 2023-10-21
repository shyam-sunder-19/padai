import React from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = ({ content }) => {
  return (
    <div className='markdown px-80'>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Markdown;