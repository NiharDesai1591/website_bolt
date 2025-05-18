import React from 'react';
import Section from '../ui/Section';
import { ExternalLink } from 'lucide-react';
import type { SharedArticle } from '../../types';

const articles: SharedArticle[] = [
  {
    id: '1',
    title: 'The Future of Business Strategy in a Digital World',
    description: 'Exploring how digital transformation is reshaping traditional business models and what leaders need to know.',
    source: 'Harvard Business Review',
    date: '2024-02-10',
    link: 'https://example.com/article1',
    tags: ['Digital Transformation', 'Strategy', 'Leadership']
  },
  {
    id: '2',
    title: 'Innovation in Enterprise: A Practical Guide',
    description: 'A comprehensive look at implementing innovation frameworks in large organizations.',
    source: 'MIT Technology Review',
    date: '2024-01-25',
    link: 'https://example.com/article2',
    tags: ['Innovation', 'Enterprise', 'Management']
  },
  {
    id: '3',
    title: 'Entrepreneurship: Bridging Engineering and Business',
    description: 'How technical expertise combined with business acumen creates successful ventures.',
    source: 'Stanford Business',
    date: '2024-01-15',
    link: 'https://example.com/article3',
    tags: ['Entrepreneurship', 'Engineering', 'Business']
  }
];

const ArticlesSection: React.FC = () => {
  return (
    <Section
      id="articles"
      title="Recommended Reads"
      subtitle="Articles and insights I find valuable"
      className="bg-gray-50 dark:bg-navy-light"
    >
      <div className="space-y-8">
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-white dark:bg-navy p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {article.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {article.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">
                {article.source} • {article.date}
              </span>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-ferrari hover:text-ferrari-light"
              >
                Read Article <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default ArticlesSection;