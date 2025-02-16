import React, { useState, useEffect } from 'react';

const CreatePostModal = ({ onPostCreated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userInfo, setUserInfo] = useState({ name: 'Guest', state: '' });

  // Fetch user info from localStorage on component mount
  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      const newPost = {
        author: userInfo.name,
        location: userInfo.state,
        timestamp: "Just now",
        title: title.trim(),
        content: content.trim()
      };
      onPostCreated(newPost);
      setTitle('');
      setContent('');
      setIsOpen(false);
    }
  };

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Trigger button */}
      <div 
        onClick={() => setIsOpen(true)}
        className="bg-[#030303] px-6 py-4 text-gray-400 flex cursor-pointer"
      >
        <div className="rounded-full w-10 h-10">
          <img src="/IconSmall.png" alt="User" className="rounded-full" />
        </div>
        <div className="bg-[#272728] border border-[#030303] ml-4 mr-2 rounded-md w-full max-w-xl flex items-center px-4 hover:bg-[#1A1A1B] transition-colors">
          <span className="text-sm text-gray-500">Create a post as {userInfo.name}</span>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-70 transition-opacity"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal content */}
          <div className="relative z-50 w-full max-w-[525px] mx-4 bg-[#1A1A1B] border border-[#343536] rounded-lg shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#343536]">
              <div>
                <h2 className="text-xl font-semibold text-gray-200">Create a post</h2>
                <p className="text-sm text-gray-400">Posting as {userInfo.name} from {userInfo.state}</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-200"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="w-full bg-[#272728] border border-[#343536] rounded-md p-3 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength={300}
                  />
                </div>
                
                <div>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="What would you like to ask or share?"
                    className="w-full bg-[#272728] border border-[#343536] rounded-md p-3 text-sm text-gray-200 min-h-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength={40000}
                  />
                </div>
                
                <div className="flex justify-end space-x-2 pt-4 border-t border-[#343536]">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-sm rounded-full hover:bg-[#343536] text-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:hover:bg-blue-500"
                    disabled={!title.trim() || !content.trim()}
                  >
                    Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePostModal;