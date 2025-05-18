import React from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import { ExternalLink } from 'lucide-react';
import type { NewsArticle } from '../../types';

const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Entrepreneurial Success Story: Leading Innovation in Business Strategy',
    source: 'Business Insider',
    date: '2024-02-15',
    link: 'https://example.com/article1'
  },
  {
    id: '2',
    title: 'ISB Alumni Revolutionizing Business Consulting',
    source: 'Forbes',
    date: '2024-01-20',
    link: 'https://example.com/article2'
  },
  {
    id: '3',
    title: 'Tech Meets Business: A New Approach to Enterprise Solutions',
    source: 'TechCrunch',
    date: '2024-01-05',
    link: 'https://example.com/article3'
  }
];

const NewsSection: React.FC = () => {
  return (
    <Section
      id="news"
      title="In the News"
      subtitle="Recent media coverage and press mentions"
      className="bg-white dark:bg-navy"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsArticles.map((article) => (
          <a
            key={article.id}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-gray-50 dark:bg-navy-light rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {article.title}
            </h3>
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>{article.source}</span>
              <span>{article.date}</span>
            </div>
            <div className="mt-4 flex items-center text-ferrari hover:text-ferrari-light">
              Read More <ExternalLink className="ml-2 h-4 w-4" />
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default NewsSection;