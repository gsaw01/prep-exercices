export const Feedback = ({ count }) => {
  let message = '👉 Start counting';
  if (count >= 10) {
    const currentThreshold = Math.floor(count / 10) * 10;
    message = `🔥 It's higher than ${currentThreshold}!`;
  } else if (count > 0) {
    message = '👏 Keep counting...';
  }

  return <h2 className="feedback-text">{message}</h2>;
};
