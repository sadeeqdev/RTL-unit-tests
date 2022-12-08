import React, {useRef, useState} from 'react';

const App = ({onWordAdd}) => {
   const inputEl= useRef(null);
   const [newWord, setNewWord] = useState('');
   const [disable, setDisable] = useState(true);

   const onAddClicked = () => {
       onWordAdd?.(newWord);
       setNewWord('');
   };

   const onChange = ({currentTarget: {value}}) => {
       setNewWord(value);
       // A word is valid if it has more than a single char and has no spaces
       const isInvalidWord = value.length < 2 || /\s/.test(value);
       setDisable(isInvalidWord);
   };

   return (
       <>
           <input
               type="text"
               name="new"
               required
               pattern="[Bb]anana|[Cc]herry"
               ref={inputEl}
               placeholder="Add word..."
               value={newWord}
               onChange={onChange}
               data-testid="add-word-input"
           />
           <button 
              onClick={onAddClicked} 
              disabled={disable}
              data-testid="add-word-button"
            >
               +
           </button>
       </>
   );
};

export default App;