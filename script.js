const blogPosts = [
  {
    title: "How I Built My First React App",
    date: "May 12, 2025",
    category: "tech",
    excerpt: "A beginner's guide to building your first React component with hooks and state.",
    image: "https://picsum.photos/seed/react/600/400"
  },
  {
    title: "Hiking the Swiss Alps",
    date: "April 5, 2025",
    category: "travel",
    excerpt: "A week-long journey through breathtaking mountain trails and quiet lakes.",
    image: "https://picsum.photos/seed/alps/600/400"
  },
  {
    title: "The Best Pasta Recipe You'll Ever Try",
    date: "March 28, 2025",
    category: "food",
    excerpt: "Authentic Italian pasta with homemade sauce — ready in 20 minutes.",
    image: "https://picsum.photos/seed/pasta/600/400"
  },
  {
    title: "Why I Switched to VS Code",
    date: "March 10, 2025",
    category: "tech",
    excerpt: "From Sublime to VS Code — the features that changed my workflow forever.",
    image: "https://picsum.photos/seed/vscode/600/400"
  },
  {
    title: "Tokyo Food Tour: 10 Must-Eat Dishes",
    date: "Feb 15, 2025",
    category: "travel",
    excerpt: "From ramen to matcha desserts — the ultimate food guide to Tokyo.",
    image: "https://picsum.photos/seed/tokyo/600/400"
  },
  {
    title: "Baking Bread at Home",
    date: "Jan 20, 2025",
    category: "food",
    excerpt: "No yeast? No problem. Here’s how to bake sourdough with just flour and water.",
    image: "https://picsum.photos/seed/bread/600/400"
  }
];

const blogGrid = document.querySelector('.blog-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Display posts
function displayPosts(postsToShow) {
  blogGrid.innerHTML = '';
  postsToShow.forEach(post => {
    const postCard = document.createElement('article');
    postCard.className = 'post-card';
    postCard.innerHTML = `
      <img src="${post.image}" alt="${post.title}" class="post-img" />
      <div class="post-content">
        <h2 class="post-title">${post.title}</h2>
        <div class="post-meta">${post.date} • <span class="category">${post.category}</span></div>
        <p class="post-excerpt">${post.excerpt}</p>
      </div>
    `;
    blogGrid.appendChild(postCard);
  });
}

// Filter logic
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const category = button.dataset.category;

    if (category === 'all') {
      displayPosts(blogPosts);
    } else {
      displayPosts(blogPosts.filter(post => post.category === category));
    }
  });
});

// Initial load
displayPosts(blogPosts.slice(0, 4)); // Show only 4 posts initially
