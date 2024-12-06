import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faRotateLeft, faRobot } from '@fortawesome/free-solid-svg-icons';
import { getChatbotResponse } from '../services/ChatbotService'; // Import the service

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const handleSend = async () => {
    if (userInput.trim() === '') return;

    // User message
    const userMessage = { text: userInput, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    // Get bot response from service
    const botResponseText = await getChatbotResponse(userInput);

    // Bot message
    const botResponse = { text: botResponseText, sender: 'bot' };
    setMessages((prev) => [...prev, botResponse]);

    setIsLoading(false);
  };

  const handleReset = () => {
    setMessages([]);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const toggleChatbot = () => {
    setChatbotOpen(!chatbotOpen);
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        className="fixed bottom-6 right-6 bg-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-teal-700 transition-all z-50"
        onClick={toggleChatbot} // Toggles chatbot visibility
        aria-label="Open Chatbot"
      >
        🤖
      </button>

      {/* Chatbot Interface */}
      {chatbotOpen && (
        <div className="fixed bottom-20 right-6 w-96 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 z-40">
          <div className="p-4 bg-teal-600 text-white font-bold text-center">
            Explorez les mystères de l'océan, une question à la fois ! 🌊
          </div>

          <div className="p-4 text-left text-gray-800 h-64 overflow-y-auto">
            {messages.length === 0 && (
              <p className="text-gray-500">Posez une question pour commencer !</p>
            )}
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div className="flex justify-start items-center">
                  {message.sender === 'bot' && (
                    <FontAwesomeIcon icon={faRobot} className="w-6 h-6 text-teal-600 mr-3" />
                  )}
                  <div
                    className={`px-4 py-3 rounded-lg ${
                      message.sender === 'bot' ? 'bg-gray-100' : 'bg-teal-600 text-white'
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <p className="text-gray-500 italic">Le bot réfléchit...</p>
            )}
          </div>

          <div className="p-4 border-t border-gray-300">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Posez une question..."
                className="flex-grow p-2 border rounded focus:outline-none"
                value={userInput}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={handleSend}
                className="bg-teal-600 text-white px-3 py-2 rounded-full hover:bg-teal-700 transition flex items-center justify-center"
                title="Envoyer"
                aria-label="Envoyer"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
              </button>
              <button
                onClick={handleReset}
                className="bg-gray-300 text-teal-600 px-3 py-2 rounded-full hover:bg-gray-400 transition flex items-center justify-center"
                title="Réinitialiser"
                aria-label="Réinitialiser"
              >
                <FontAwesomeIcon icon={faRotateLeft} className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
