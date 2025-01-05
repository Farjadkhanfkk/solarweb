'use client'
import { useState, useEffect, useRef } from 'react';

const Bot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);  // Step to track the conversation flow
  const messagesEndRef = useRef(null); // Ref to scroll to the end of messages

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: 'user' },
      ]);
      setInput('');

      setTimeout(() => {
        const botReply = getBotReply(input);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botReply, sender: 'bot' },
        ]);
        setStep(prevStep => prevStep + 1);  // Move to the next step after reply
      }, 1000); // 1-second delay for bot response
    }
  };

  const getBotReply = (userMessage) => {
    const lowerCaseMessage = userMessage.trim().toLowerCase(); // Normalize input to lowercase
  
    // Business introduction (step 0)
    if (step === 0) {
      return 'Hello! Welcome to Almas Solar Solutions. We specialize in residential, commercial, and agricultural solar panel installations. How can I assist you today? Would you like to learn more about our services?';
    }
  
    // Category selection (step 1)
    if (step === 1) {
      if (['yes', 'sure', 'tell me more'].includes(lowerCaseMessage)) {
        return 'We offer solar panel solutions for: \n1. Residential \n2. Commercial \n3. Agricultural. \nPlease type the category you are interested in (e.g., "residential", "commercial", or "agriculture").';
      } else {
        return 'Could you please confirm if you want to learn more about our services? Type "yes" or "no".';
      }
    }
  
    // Panel size selection (step 2)
    if (step === 2) {
      if (['residential', 'commercial', 'agriculture'].includes(lowerCaseMessage)) {
        return `Great! For ${lowerCaseMessage} solutions, we offer the following panel sizes:\n- 5KW\n- 10KW\n- 20KW\nPlease type your preferred panel size (e.g., "5KW", "10KW", "20KW").`;
      } else {
        return 'Please specify a valid category: residential, commercial, or agriculture.';
      }
    }
  
    // Pricing and WhatsApp Contact (step 3)
    if (step === 3) {
      // Normalize the input to check for panel sizes like 5KW, 10KW, 20KW, etc.
      if (['5kw', '10kw', '20kw'].includes(lowerCaseMessage)) {
        return (
          <>
            Thank you for choosing the {lowerCaseMessage.toUpperCase()} solution. {' '}
            <a
              href={`https://wa.me/03315492127?text=I%20want%20to%20know%20about%20the%20price%20of%20the%20${lowerCaseMessage}%20solar%20panel.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#4CAF50',
                fontWeight: 'bold',
                textDecoration: 'none',
              }}
            >
              Click here to contact us on WhatsApp for more details.
            </a>
          </>
        );
      } else {
        return 'Please choose a valid panel size: 5KW, 10KW, or 20KW.';
      }
    }
  
    // Default fallback
    return 'I didn\'t quite understand that. Could you please provide more details?';
  };

  // Scroll to the bottom of the messages whenever they update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initial bot message
  useEffect(() => {
    if (isOpen) {
      setMessages([{ text: 'How can I assist you?', sender: 'bot' }]);
      setStep(0);  // Start at the beginning of the conversation
    }
  }, [isOpen]);

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
      {/* Message Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          borderRadius: '50%',
          padding: '15px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.5rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        💬
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div
          style={{
            width: '450px',
            height: '500px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '15px',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Header */}
          <div style={{
            fontWeight: 'bold',
            fontSize: '1.2rem',
            textAlign: 'center',
            padding: '10px 0',
            borderBottom: '1px solid #ddd',
            color: '#4CAF50'
          }}>
            Chat with Us!
          </div>

          {/* Messages */}
          <div
            style={{
              flexGrow: 1,
              overflowY: 'auto',
              marginTop: '10px',
              marginBottom: '10px',
              paddingRight: '10px',
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  textAlign: msg.sender === 'user' ? 'right' : 'left',
                  margin: '8px',
                  color: msg.sender === 'user' ? '#007bff' : '#4CAF50',
                  backgroundColor: msg.sender === 'user' ? '#e9f5ff' : '#e8fce8',
                  padding: '8px 12px',
                  borderRadius: '15px',
                  maxWidth: '100%',
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* Scroll target */}
          </div>

          {/* Input and Send Button */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '20px',
                outline: 'none',
              }}
            />
            <button
              onClick={handleSendMessage}
              style={{
                marginLeft: '10px',
                padding: '10px',
                borderRadius: '50%',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bot;
