import { useState, useEffect } from 'react';

export default function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Твій 6-й варіант
    fetch('https://jsonplaceholder.typicode.com/posts/6/comments')
      .then(response => response.json())
      .then(data => {
        setComments(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Помилка:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="cv-section">
      <h2>Відгуки (React Fetch API)</h2>
      {loading ? (
        <p>Завантаження коментарів...</p>
      ) : (
        <div className="comments-container">
          {comments.map(comment => (
            <div key={comment.id} className="comment">
              <h4>{comment.name}</h4>
              <small>{comment.email}</small>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}