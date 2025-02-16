import React, { useState, useEffect } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { X } from 'lucide-react';

const VirtualKeyboard = ({ onKeyPress, onClose, selectedLanguage = 'english' }) => {
  const [layout, setLayout] = useState('default');
  const [keyboardLanguage, setKeyboardLanguage] = useState(selectedLanguage);

  const keyboards = {
    english: {
      name: 'English',
      layout: {
        default: [
          'q w e r t y u i o p',
          'a s d f g h j k l',
          'z x c v b n m',
          '{space} {bksp}'
        ]
      }
    },
    hindi: {
      name: 'हिंदी',
      layout: {
        default: [
          '` \u0967 \u0968 \u0969 \u096a \u096b \u096c \u096d \u096e \u096f \u0966 - \u0943 {bksp}',
          '{tab} \u094c \u0948 \u093e \u0940 \u0942 \u092c \u0939 \u0917 \u0926 \u091c \u0921 \u093c \u0949',
          '{lock} \u094b \u0947 \u094d \u093f \u0941 \u092a \u0930 \u0915 \u0924 \u091a \u091f {enter}',
          '{shift} \u0949 \u0902 \u092e \u0928 \u0935 \u0932 \u0938 , . \u092f {shift}',
          '{space}'
        ],
        shift: [
          '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
          '{tab} \u0914 \u0910 \u0906 \u0908 \u090a \u092d \u0919 \u0918 \u0927 \u091d \u0922 \u091e',
          '{lock} \u0913 \u090f \u0905 \u0907 \u0909 \u092b \u0931 \u0916 \u0925 \u091b \u0920 {enter}',
          '{shift} \u0911 \u0901 \u0923 \u0928 \u0935 \u0933 \u0936 \u0937 \u0964 \u095f {shift}',
          '{space}'
        ]
      }
    },
    tamil: {
      name: 'தமிழ்',
      layout: {
        default: [
          '` \u0be7 \u0be8 \u0be9 \u0bea \u0beb \u0bec \u0bed \u0bee \u0bef \u0be6 - = {bksp}',
          '{tab} \u0bcc \u0bc8 \u0bbe \u0bc0 \u0bc2 \u0baa \u0bb9 \u0b95 \u0ba4 \u0b9c \u0b9f \u0b9e',
          '{lock} \u0bcb \u0bc7 \u0bcd \u0bbf \u0bc1 \u0baa \u0bb0 \u0b95 \u0ba4 \u0b9a \u0b9f {enter}',
          '{shift} \u0bc6 \u0b99 \u0bae \u0ba8 \u0bb5 \u0bb2 \u0bb8 , . \u0baf {shift}',
          '{space}'
        ]
      }
    },
    telugu: {
      name: 'తెలుగు',
      layout: {
        default: [
          '` \u0c67 \u0c68 \u0c69 \u0c6a \u0c6b \u0c6c \u0c6d \u0c6e \u0c6f \u0c66 - \u0c43 {bksp}',
          '{tab} \u0c4c \u0c48 \u0c3e \u0c40 \u0c42 \u0c2c \u0c39 \u0c17 \u0c26 \u0c1c \u0c21 \u0c3c \u0c49',
          '{lock} \u0c4b \u0c47 \u0c4d \u0c3f \u0c41 \u0c2a \u0c30 \u0c15 \u0c24 \u0c1a \u0c1f {enter}',
          '{shift} \u0c46 \u0c02 \u0c2e \u0c28 \u0c35 \u0c32 \u0c38 , . \u0c2f {shift}',
          '{space}'
        ]
      }
    }
  };

  const onChange = (input) => {
    onKeyPress(input);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-zinc-800 p-6 rounded-lg w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2 flex-wrap">
            {Object.entries(keyboards).map(([lang, { name }]) => (
              <button
                key={lang}
                onClick={() => setKeyboardLanguage(lang)}
                className={`px-4 py-2 rounded ${
                  keyboardLanguage === lang 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-zinc-700 text-gray-300'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <div className="bg-zinc-900 p-4 rounded-lg">
          <Keyboard
            layout={keyboards[keyboardLanguage].layout}
            layoutName={layout}
            onChange={onChange}
            theme="hg-theme-default hg-layout-default myTheme"
            buttonTheme={[
              {
                class: "hg-blue",
                buttons: "{enter} {escape} {bksp} {space} {shift} {tab} {lock}"
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default VirtualKeyboard;