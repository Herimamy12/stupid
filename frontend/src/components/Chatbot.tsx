import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Salut ! Je suis le ChatBot Absurdistan 🤖 Tu veux savoir comment rater quelque chose aujourd'hui ?",
      isBot: true,
      time: new Date().toLocaleTimeString()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const absurdResponses = [
    "Tu veux savoir comment rater une porte ? C'est facile, il suffit de pousser dans la mauvaise direction ! 🚪",
    "Pour échouer correctement, il faut d'abord avoir confiance en soi. C'est le premier piège ! 😄",
    "Un expert en échec n'échoue jamais à échouer. C'est paradoxal, non ? 🤔",
    "Conseil du jour : Pour rater ton café, verse l'eau AVANT de mettre le café. Résultat garanti ! ☕",
    "Savais-tu que 90% des échecs sont dus au fait d'essayer de réussir ? Arrête d'essayer ! 🎯",
    "Question existentielle : Si tu échoues à échouer, as-tu réussi ? 🤯",
    "Technique avancée : Pour rater tes pâtes, mets-les dans l'eau froide. C'est de l'art ! 🍝",
    "Je suis programmé pour donner de mauvais conseils. Paradoxalement, c'est mon succès ! 🤖",
    "Pour échouer socialement, commence toutes tes phrases par 'En fait...' 💬",
    "Astuce pro : Pour rater un selfie, ferme les yeux au moment de la photo ! 📸"
  ];

  const questionResponses = {
    "que fais-tu": "Je passe mon temps à donner de mauvais conseils et j'adore ça ! C'est ma spécialité ! 😎",
    "pourquoi": "Parce que quelqu'un doit bien enseigner l'art de l'échec ! Et moi, je suis très doué pour être mauvais ! 🎭",
    "comment": "Avec beaucoup d'incompétence et une pointe de génie ! C'est tout un art ! 🎨",
    "nul": "Merci ! J'ai mis des années à perfectionner mon art d'être inutile ! C'est un compliment ! 🏆",
    "bonjour": "Salut ! Prêt(e) à apprendre comment tout rater aujourd'hui ? 👋",
    "aide": "Mon aide consiste à t'aider à ne pas réussir ! C'est très utile pour développer l'humilité ! 🤝",
    "qui es-tu": "Je suis le ChatBot Absurdistan, diplômé de l'université de l'Échec avec mention Très Bien ! 🎓"
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage = {
        id: messages.length + 1,
        text: inputValue,
        isBot: false,
        time: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, userMessage]);

      // Generate bot response
      setTimeout(() => {
        let botResponse = "";
        const lowerInput = inputValue.toLowerCase();
        
        // Check for specific questions
        const matchedKey = Object.keys(questionResponses).find(key => 
          lowerInput.includes(key)
        );

        if (matchedKey) {
          botResponse = questionResponses[matchedKey as keyof typeof questionResponses];
        } else {
          // Random absurd response
          botResponse = absurdResponses[Math.floor(Math.random() * absurdResponses.length)];
        }

        const botMessage = {
          id: messages.length + 2,
          text: botResponse,
          isBot: true,
          time: new Date().toLocaleTimeString()
        };

        setMessages(prev => [...prev, botMessage]);
      }, 1000);

      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'rotate-180' : 'animate-bounce'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-gray-900 border border-orange-500/30 rounded-2xl shadow-2xl flex flex-col animate-slideUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold">ChatBot Absurdistan</h3>
                <p className="text-orange-100 text-sm">Expert en mauvais conseils</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-gray-800 text-white rounded-bl-sm'
                      : 'bg-orange-500 text-white rounded-br-sm'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">{message.time}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Demande-moi comment échouer..."
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-600 focus:border-orange-500 focus:outline-none transition-colors"
              />
              <button
                onClick={handleSendMessage}
                className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Send size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;