import React, { useState } from 'react';
import { ChevronUp, MessageSquare, Share2 } from 'lucide-react';

const ForumPost = ({ post }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [replies, setReplies] = useState([]);

  const handleSubmitReply = (e) => {
    e.preventDefault();
    if (replyText.trim()) {
      const newReply = {
        id: Date.now(),
        author: 'Current User',
        content: replyText,
        timestamp: 'Just now',
        votes: 0
      };
      setReplies([...replies, newReply]);
      setReplyText('');
      setShowReplyInput(false);
    }
  };

  return (
    <div className="mx-6 text-gray-400 space-y-4">
      {/* Main Post */}
      <div className="border border-[#343536] bg-[#272728] p-4 rounded-md">
        <h5 className="text-[#818384] text-sm">Posted by {post.author} {post.timestamp}</h5>
        <h2 className="text-2xl mb-3">{post.title}</h2>
        <div className="text-[17px] leading-9 mb-4">
          {post.content}
        </div>
        
        {/* Post Actions */}
        <div className="flex items-center space-x-4 text-[#818384] text-sm mt-2">
          <button className="flex items-center space-x-1 hover:bg-[#343536] p-2 rounded">
            <ChevronUp size={16} />
            <span>Vote</span>
          </button>
          <button 
            className="flex items-center space-x-1 hover:bg-[#343536] p-2 rounded"
            onClick={() => setShowReplyInput(!showReplyInput)}
          >
            <MessageSquare size={16} />
            <span>Reply</span>
          </button>
          <button className="flex items-center space-x-1 hover:bg-[#343536] p-2 rounded">
            <Share2 size={16} />
            <span>Share</span>
          </button>
        </div>

        {/* Reply Input */}
        {showReplyInput && (
          <form onSubmit={handleSubmitReply} className="mt-4">
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="w-full bg-[#1A1A1B] border border-[#343536] rounded-md p-3 text-sm text-gray-200 min-h-[100px]"
              placeholder="What are your thoughts?"
            />
            <div className="flex justify-end space-x-2 mt-2">
              <button
                type="button"
                onClick={() => setShowReplyInput(false)}
                className="px-4 py-2 text-sm rounded-full hover:bg-[#343536]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-gray-200 disabled:opacity-50"
                disabled={!replyText.trim()}
              >
                Reply
              </button>
            </div>
          </form>
        )}

        {/* Replies */}
        {replies.length > 0 && (
          <div className="mt-4 space-y-4">
            <div className="border-t border-[#343536] pt-4">
              {replies.map((reply) => (
                <div key={reply.id} className="ml-6 mb-4 border-l-2 border-[#343536] pl-4">
                  <div className="text-[#818384] text-sm">
                    {reply.author} · {reply.timestamp}
                  </div>
                  <div className="mt-1 text-gray-300">
                    {reply.content}
                  </div>
                  <div className="flex items-center space-x-4 text-[#818384] text-sm mt-2">
                    <button className="flex items-center space-x-1 hover:bg-[#343536] p-1 rounded">
                      <ChevronUp size={14} />
                      <span>{reply.votes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:bg-[#343536] p-1 rounded">
                      <MessageSquare size={14} />
                      <span>Reply</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForumPost;