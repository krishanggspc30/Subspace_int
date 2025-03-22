import React, { useState } from 'react';
import { 
  BookmarkPlus, 
  Share2, 
  CheckCircle, 
  TrendingUp, 
  TrendingDown, 
  Minus,
  Settings,
  Search,
  Tag,
  Sun,
  Moon
} from 'lucide-react';

type Article = {
  id: string;
  title: string;
  summary: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  sentimentExplanation: string;
  read: boolean;
};

type Preferences = {
  topics: string[];
  keywords: string[];
  sources: string[];
};

function App() {
  const [activeTab, setActiveTab] = useState<'feed' | 'preferences'>('feed');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [preferences, setPreferences] = useState<Preferences>({
    topics: ['Technology', 'Science', 'Business'],
    keywords: ['AI', 'Climate Change', 'Innovation'],
    sources: ['Reuters', 'Associated Press', 'Bloomberg'],
  });

  // Mock data for demonstration
  const [articles] = useState<Article[]>([
    {
      id: '1',
      title: 'Breakthrough in Quantum Computing Achieved',
      summary: 'Scientists have made a significant advancement in quantum computing, achieving stable qubit operations at room temperature.',
      sentiment: 'positive',
      sentimentExplanation: 'Major scientific advancement with positive implications for technology sector',
      read: false,
    },
    {
      id: '2',
      title: 'Global Markets Face Uncertainty',
      summary: 'Markets worldwide show volatility amid economic concerns and geopolitical tensions.',
      sentiment: 'negative',
      sentimentExplanation: 'Increased market volatility and economic uncertainty',
      read: false,
    },
    {
      id: '3',
      title: 'New Renewable Energy Project Launches',
      summary: 'A large-scale solar power project begins construction, aiming to power 100,000 homes.',
      sentiment: 'positive',
      sentimentExplanation: 'Positive environmental impact and sustainable energy development',
      read: false,
    },
  ]);

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return <TrendingUp className="w-5 h-5 text-emerald-500" />;
      case 'negative':
        return <TrendingDown className="w-5 h-5 text-rose-500" />;
      default:
        return <Minus className="w-5 h-5 text-gray-500" />;
    }
  };

  const PreferencesPanel = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Tag className="w-5 h-5" />
          Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          {preferences.topics.map((topic) => (
            <span key={topic} className="px-3 py-1 bg-indigo-500 text-white rounded-full text-sm">
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Search className="w-5 h-5" />
          Keywords
        </h3>
        <div className="flex flex-wrap gap-2">
          {preferences.keywords.map((keyword) => (
            <span key={keyword} className="px-3 py-1 bg-fuchsia-500 text-white rounded-full text-sm">
              {keyword}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Sources</h3>
        <div className="flex flex-wrap gap-2">
          {preferences.sources.map((source) => (
            <span key={source} className="px-3 py-1 bg-cyan-500 text-white rounded-full text-sm">
              {source}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDarkMode 
        ? 'bg-gray-900 text-gray-100' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <nav className={`${
        isDarkMode 
          ? 'bg-gray-800 border-b border-gray-700' 
          : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold">NewsAI Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full ${
                  isDarkMode
                    ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setActiveTab(activeTab === 'feed' ? 'preferences' : 'feed')}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${
                  isDarkMode
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-100'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {activeTab === 'feed' ? (
                  <>
                    <Settings className="w-4 h-4 mr-2" />
                    Preferences
                  </>
                ) : (
                  'Back to Feed'
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'preferences' ? (
          <PreferencesPanel />
        ) : (
          <div className="space-y-6">
            {articles.map((article) => (
              <article
                key={article.id}
                className={`rounded-lg p-6 transition-all ${
                  isDarkMode
                    ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700'
                    : 'bg-white hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                    <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {article.summary}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        {getSentimentIcon(article.sentiment)}
                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                          {article.sentimentExplanation}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className={`p-2 ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-gray-200' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}>
                      <BookmarkPlus className="w-5 h-5" />
                    </button>
                    <button className={`p-2 ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-gray-200' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}>
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className={`p-2 ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-gray-200' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}>
                      <CheckCircle className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;