export const getCategoryColor = (categoryName) => {
  const colors = {
    'Programming Languages': 'var(--ifm-color-primary)',
    'Database Technology': 'var(--ifm-color-secondary)',
    'Auth and Security': 'var(--ifm-color-danger)',
    'CI/CD and Code Management': 'var(--ifm-color-success)',
    'Architectures': 'var(--ifm-color-accent)',
    'Client and Stakeholder Management': 'var(--ifm-color-warning)',
    'Tooling': 'var(--ifm-color-secondary-dark)'
  };
  return colors[categoryName] || 'var(--ifm-color-primary)';
};

export const getCategoryIcon = (categoryName) => {
  const icons = {
    'Programming Languages': '💻',
    'Database Technology': '🗄️',
    'Auth and Security': '🔒',
    'CI/CD and Code Management': '🚀',
    'Architectures': '🏗️',
    'Client and Stakeholder Management': '🤝',
    'Tooling': '🛠️',
  };
  return icons[categoryName] || '💻';
};

export const getProficiencyEmojis = (level) => {
  const emojiMap = {
    1: '⭐',
    2: '⭐⭐',
    3: '⭐⭐⭐',
    4: '⭐⭐⭐⭐',
    5: '⭐⭐⭐⭐⭐'
  };
  return emojiMap[level] || '⭐';
};

export const getProficiencyLabel = (level) => {
  const labelMap = {
    1: 'Beginner',
    2: 'Novice',
    3: 'Intermediate',
    4: 'Advanced',
    5: 'Expert'
  };
  return labelMap[level] || 'Beginner';
};
