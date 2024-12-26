import React, { useState } from 'react';
import { MessageCircle, Search, Moon, Sun, Lock, Settings, Home, FileText, Users, Shield, ChevronDown, Zap } from 'lucide-react';

const ChatUI = () => {
  const [isDark, setIsDark] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to Horizon AI Chat! How can I help you today?", isUser: false },
    { id: 2, text: "Can you help me with coding?", isUser: true }
  ]);
  const [inputText, setInputText] = useState('');
  const [selectedModel, setSelectedModel] = useState('gpt-3.5');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    setMessages(prev => [...prev, { id: prev.length + 1, text: inputText, isUser: true }]);
    setInputText('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: prev.length + 1,
          text: 'This is a simulated response. In a real application, this would be an AI-generated reply.',
          isUser: false
        }
      ]);
    }, 1000);
  };

  return (
    <div className={`flex min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <aside className={`w-64 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r p-4`}>
        <div className="flex items-center mb-8">
          <MessageCircle className="h-6 w-6 text-purple-600" />
          <h1 className={`ml-2 text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>HORIZON AI</h1>
        </div>

        <nav className="space-y-4">
          <div className={`p-2 ${isDark ? 'bg-purple-900' : 'bg-purple-50'} text-purple-600 rounded-lg flex items-center`}>
            <MessageCircle className="h-5 w-5" />
            <span className="ml-2">Chat Dashboard</span>
          </div>

          <div className="space-y-1">
            {[
              { icon: Home, text: 'Templates', isPro: true },
              { icon: FileText, text: 'History' },
              { icon: Users, text: 'Team' },
              { icon: Shield, text: 'Settings' }
            ].map((item, i) => (
              <div key={i} className={`p-2 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} rounded-lg flex items-center justify-between`}>
                <div className="flex items-center">
                  <item.icon className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`ml-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item.text}</span>
                </div>
                {item.isPro && (
                  <span className={`text-xs ${isDark ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-600'} px-2 py-1 rounded`}>
                    PRO
                  </span>
                )}
              </div>
            ))}
          </div>
        </nav>

        <div className="mt-8 bg-purple-600 text-white p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Go unlimited with PRO</h3>
          <p className="text-sm text-purple-200 mb-4">
            Get your AI Project to another level with Horizon AI Template PRO!
          </p>
          <button className="w-full bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-50">
            Get started with PRO
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b p-4`}>
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              {['gpt-3.5', 'gpt-4'].map((model) => (
                <button
                  key={model}
                  onClick={() => setSelectedModel(model)}
                  className={`px-4 py-2 rounded-lg flex items-center ${
                    selectedModel === model 
                      ? isDark ? 'bg-purple-900 text-purple-300' : 'bg-purple-50 text-purple-600'
                      : isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-50 text-gray-600'
                  }`}
                >
                  {model === 'gpt-4' && <Zap className="h-4 w-4 mr-1" />}
                  {model}
                  {model === 'gpt-3.5' && <ChevronDown className="h-4 w-4 ml-1" />}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className={`pl-10 pr-4 py-2 rounded-lg ${isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-50 text-gray-900'}`}
                />
              </div>
              <Lock className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
              <Settings className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
              <button onClick={() => setIsDark(!isDark)}>
                {isDark ? (
                  <Sun className="h-5 w-5 text-gray-400" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-500" />
                )}
              </button>
              <div className="h-8 w-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                AP
              </div>
            </div>
          </div>
        </header>

        {/* Chat Area */}
        <div className={`flex-1 overflow-y-auto p-4 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="max-w-3xl mx-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-lg ${
                    msg.isUser
                      ? 'bg-purple-600 text-white'
                      : isDark ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className={`border-t p-4 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="max-w-3xl mx-auto relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message here..."
              className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'} focus:outline-none focus:border-purple-600`}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
            >
              Send
            </button>
          </div>
          <div className={`max-w-3xl mx-auto mt-2 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts
          </div>
        </form>
      </main>
    </div>
  );
};

export default ChatUI;