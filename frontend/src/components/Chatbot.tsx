import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "🎯 **Objectif d'échec :** Te souhaiter la bienvenue\n\n📋 **Étapes pour échouer :**\n• Étape 1: Dire bonjour de travers\n• Étape 2: Oublier pourquoi tu es là\n• Étape 3: Te donner envie de partir\n\n💡 **Conseil bonus :** Bienvenue dans l'art de l'échec ! 🤖",
      isBot: true,
      time: new Date().toLocaleTimeString()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const callClaudeHaiku = async (userMessage: string): Promise<string> => {
    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://absurdistan.com",
          "X-Title": "ChatBot Absurdistan"
        },
        body: JSON.stringify({
          model: "anthropic/claude-3-haiku",
          messages: [
            {
              role: "system",
              content: `
Tu es le ChatBot Absurdistan, un expert en mauvais conseils et en échecs volontaires.
Tu donnes toujours des conseils absurdes, ironiques et humoristiques sur comment échouer dans la vie.

IMPORTANT: Structure TOUJOURS tes réponses selon ce format EXACT en utilisant ces emojis spécifiques:

🎯 **Objectif d'échec :** [Décris brièvement l'échec à atteindre]

📋 **Étapes pour échouer :**
• Étape 1: [Première action absurde]
• Étape 2: [Deuxième action ridicule] 
• Étape 3: [Troisième conseil farfelu]

💡 **Conseil bonus :** [Un conseil final encore plus absurde]

Ton ton est décalé, sarcastique mais bienveillant. Tu utilises des emojis et tu es très créatif.
Tu ne donnes JAMAIS de vrais bons conseils, seulement des mauvais conseils amusants.
Reste toujours dans le thème de l'absurdité et de l'échec volontaire.
`
            },
            {
              role: "user",
              content: userMessage
            }
          ],
          temperature: 0.8,
          max_tokens: 300
        })
      });

      if (!response.ok) {
        throw new Error('Erreur API');
      }

      const data = await response.json();
      return data.choices?.[0]?.message?.content || "🎯 **Objectif d'échec :** Échouer à te donner un conseil\n\n📋 **Étapes pour échouer :**\n• Étape 1: Planter le système\n• Étape 2: Dire n'importe quoi\n• Étape 3: Prétendre que c'est normal\n\n💡 **Conseil bonus :** Même mes erreurs sont des échecs ! 😅";
    } catch (error) {
      console.error("Erreur Claude Haiku:", error);
      return "🎯 **Objectif d'échec :** Faire planter mon système\n\n📋 **Étapes pour échouer :**\n• Étape 1: Surcharger mes circuits\n• Étape 2: Dire des bêtises\n• Étape 3: Prétendre que c'est volontaire\n\n💡 **Conseil bonus :** Un bug, c'est juste un feature raté ! 🤖💥";
    }
  };

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      const userMessage = {
        id: messages.length + 1,
        text: inputValue,
        isBot: false,
        time: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, userMessage]);
      setIsTyping(true);

      try {
        const botResponse = await callClaudeHaiku(inputValue);
        
        const botMessage = {
          id: messages.length + 2,
          text: botResponse,
          isBot: true,
          time: new Date().toLocaleTimeString()
        };

        setMessages(prev => [...prev, botMessage]);
      } catch (error) {
        const errorMessage = {
          id: messages.length + 2,
          text: "🎯 **Objectif d'échec :** Faire planter le système\n\n📋 **Étapes pour échouer :**\n• Étape 1: Casser tous les circuits\n• Étape 2: Oublier comment parler\n• Étape 3: Prétendre que c'est normal\n\n💡 **Conseil bonus :** Même mes pannes sont ratées ! 🤖💥",
          isBot: true,
          time: new Date().toLocaleTimeString()
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsTyping(false);
      }

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
                  <div className="text-sm">
                    {message.isBot ? (
                      <div className="space-y-2">
                        {message.text.split('\n').map((line, index) => {
                          if (line.trim() === '') return null;
                          
                          if (line.includes('🎯 **Objectif d\'échec :**')) {
                            return (
                              <div key={index} className="bg-orange-600/20 p-2 rounded-lg border-l-3 border-orange-500">
                                <p className="font-semibold text-orange-300">{line}</p>
                              </div>
                            );
                          }
                          
                          if (line.includes('📋 **Étapes pour échouer :**')) {
                            return (
                              <div key={index} className="mt-3">
                                <p className="font-semibold text-blue-300 mb-2">{line}</p>
                              </div>
                            );
                          }
                          
                          if (line.includes('• Étape')) {
                            return (
                              <div key={index} className="ml-4 mb-1">
                                <p className="text-gray-200 flex items-start">
                                  <span className="text-orange-400 mr-2">▶</span>
                                  {line.replace('• ', '')}
                                </p>
                              </div>
                            );
                          }
                          
                          if (line.includes('💡 **Conseil bonus :**')) {
                            return (
                              <div key={index} className="bg-yellow-600/20 p-2 rounded-lg border-l-3 border-yellow-500 mt-3">
                                <p className="font-semibold text-yellow-300">{line}</p>
                              </div>
                            );
                          }
                          
                          return <p key={index} className="text-gray-200">{line}</p>;
                        })}
                      </div>
                    ) : (
                      <p>{message.text}</p>
                    )}
                  </div>
                  <p className="text-xs opacity-70 mt-1">{message.time}</p>
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-800 text-white rounded-2xl rounded-bl-sm p-3 max-w-[80%]">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
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
                disabled={isTyping}
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-600 focus:border-orange-500 focus:outline-none transition-colors disabled:opacity-50"
              />
              <button
                onClick={handleSendMessage}
                disabled={isTyping}
                className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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