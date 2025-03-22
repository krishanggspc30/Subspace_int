'use client'

import { useState } from 'react'
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
  Moon,
  Clock,
  Filter,
  BookmarkCheck,
  Share,
  Check,
  Menu,
  X
} from 'lucide-react'

export default function Home() {
  const [isPreferencesPanelOpen, setIsPreferencesPanelOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [activeFilter, setActiveFilter] = useState('all')
  const [preferences, setPreferences] = useState({
    topics: ['Technology', 'Science', 'Business', 'Health', 'Environment'],
    keywords: ['AI', 'Climate Change', 'Innovation', 'Blockchain', 'Renewable Energy'],
    sources: ['Reuters', 'Associated Press', 'Bloomberg', 'TechCrunch', 'Nature'],
    updateFrequency: 'hourly',
    notificationsEnabled: true
  })

  const [articles, setArticles] = useState([
    {
      id: '1',
      title: 'Breakthrough in Quantum Computing Achieved',
      summary: 'Scientists have made a significant advancement in quantum computing, achieving stable qubit operations at room temperature.',
      sentiment: 'positive',
      sentimentExplanation: 'Major scientific advancement with positive implications for technology sector',
      category: 'Technology',
      readingTime: '4 min',
      publishedAt: '2 hours ago',
      source: 'Nature',
      read: false,
      bookmarked: false,
      shared: false
    },
    {
      id: '2',
      title: 'Global Markets Face Uncertainty',
      summary: 'Markets worldwide show volatility amid economic concerns and geopolitical tensions. Experts suggest cautious approach.',
      sentiment: 'negative',
      sentimentExplanation: 'Increased market volatility and economic uncertainty',
      category: 'Business',
      readingTime: '3 min',
      publishedAt: '4 hours ago',
      source: 'Bloomberg',
      read: false,
      bookmarked: false,
      shared: false
    },
    {
      id: '3',
      title: 'New Renewable Energy Project Launches',
      summary: 'A large-scale solar power project begins construction, aiming to power 100,000 homes. Project demonstrates viability of renewable energy.',
      sentiment: 'positive',
      sentimentExplanation: 'Positive environmental impact and sustainable energy development',
      category: 'Environment',
      readingTime: '5 min',
      publishedAt: '6 hours ago',
      source: 'Reuters',
      read: false,
      bookmarked: false,
      shared: false
    },
    {
      id: '4',
      title: 'Breakthrough in Cancer Treatment Research',
      summary: 'Researchers discover new immunotherapy approach showing promising results in early clinical trials for treating aggressive forms of cancer.',
      sentiment: 'positive',
      sentimentExplanation: 'Significant medical advancement with potential to save lives',
      category: 'Health',
      readingTime: '6 min',
      publishedAt: '1 day ago',
      source: 'Associated Press',
      read: false,
      bookmarked: false,
      shared: false
    },
    {
      id: '5',
      title: 'AI Ethics Guidelines Proposed',
      summary: 'Leading tech companies collaborate on comprehensive AI ethics framework to ensure responsible development and deployment of AI systems.',
      sentiment: 'neutral',
      sentimentExplanation: 'Important development in AI governance with mixed implications',
      category: 'Technology',
      readingTime: '4 min',
      publishedAt: '1 day ago',
      source: 'TechCrunch',
      read: false,
      bookmarked: false,
      shared: false
    }
  ])

  const categories = ['All', 'Technology', 'Business', 'Environment', 'Health', 'Science']

  const getSentimentIcon = (sentiment) => {
    switch (sentiment) {
      case 'positive':
        return <TrendingUp className="w-5 h-5 text-emerald-500" />
      case 'negative':
        return <TrendingDown className="w-5 h-5 text-rose-500" />
      default:
        return <Minus className="w-5 h-5 text-gray-500" />
    }
  }

  const handleArticleAction = (id, action) => {
    setArticles(articles.map(article => {
      if (article.id === id) {
        switch (action) {
          case 'bookmark':
            return { ...article, bookmarked: !article.bookmarked }
          case 'share':
            return { ...article, shared: true }
          case 'read':
            return { ...article, read: !article.read }
          default:
            return article
        }
      }
      return article
    }))
  }

  const filteredArticles = articles.filter(article => 
    activeFilter === 'all' || article.category.toLowerCase() === activeFilter.toLowerCase()
  )

  const PreferencesPanel = () => (
    <div className={`fixed inset-y-0 right-0 w-80 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl transform transition-transform duration-300 ease-in-out ${isPreferencesPanelOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="h-full overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Preferences</h2>
            <button
              onClick={() => setIsPreferencesPanelOpen(false)}
              className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-8">
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

            <div className="pt-4 border-t border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Additional Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={preferences.notificationsEnabled}
                      onChange={() => setPreferences({
                        ...preferences,
                        notificationsEnabled: !preferences.notificationsEnabled
                      })}
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>Enable Notifications</span>
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Update Frequency</label>
                  <select 
                    value={preferences.updateFrequency}
                    onChange={(e) => setPreferences({
                      ...preferences,
                      updateFrequency: e.target.value
                    })}
                    className={`mt-1 block w-full rounded-md ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600' 
                        : 'bg-white border-gray-300'
                    } py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                  >
                    <option value="realtime">Real-time</option>
                    <option value="hourly">Hourly</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDarkMode 
        ? 'bg-gray-900 text-gray-100' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <nav className={`sticky top-0 z-20 ${
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
                onClick={() => setIsPreferencesPanelOpen(!isPreferencesPanelOpen)}
                className={`p-2 rounded-full ${
                  isDarkMode
                    ? `${isPreferencesPanelOpen ? 'bg-blue-600' : 'bg-gray-700'} hover:bg-gray-600`
                    : `${isPreferencesPanelOpen ? 'bg-blue-500' : 'bg-gray-200'} hover:bg-gray-300`
                }`}
              >
                <Menu className={`w-5 h-5 ${isPreferencesPanelOpen ? 'text-white' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Categories</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category.toLowerCase())}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category.toLowerCase()
                    ? isDarkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-500 text-white'
                    : isDarkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className={`rounded-lg p-6 transition-all ${
                isDarkMode
                  ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700'
                  : 'bg-white hover:shadow-md'
              } ${article.read ? 'opacity-75' : ''}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                    }`}>
                      {article.category}
                    </span>
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {article.source}
                    </span>
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {article.publishedAt}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {article.summary}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-1">
                      {getSentimentIcon(article.sentiment)}
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        {article.sentimentExplanation}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readingTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleArticleAction(article.id, 'bookmark')}
                    className={`p-2 rounded-full transition-colors ${
                      article.bookmarked
                        ? 'bg-blue-500 text-white'
                        : isDarkMode 
                          ? 'text-gray-400 hover:text-gray-200' 
                          : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {article.bookmarked ? <BookmarkCheck className="w-5 h-5" /> : <BookmarkPlus className="w-5 h-5" />}
                  </button>
                  <button 
                    onClick={() => handleArticleAction(article.id, 'share')}
                    className={`p-2 rounded-full transition-colors ${
                      article.shared
                        ? 'bg-green-500 text-white'
                        : isDarkMode 
                          ? 'text-gray-400 hover:text-gray-200' 
                          : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {article.shared ? <Share className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
                  </button>
                  <button 
                    onClick={() => handleArticleAction(article.id, 'read')}
                    className={`p-2 rounded-full transition-colors ${
                      article.read
                        ? 'bg-emerald-500 text-white'
                        : isDarkMode 
                          ? 'text-gray-400 hover:text-gray-200' 
                          : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {article.read ? <Check className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <PreferencesPanel />
    </div>
  )
}