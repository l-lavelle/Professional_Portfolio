// TODO: Clean up Error Page
const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404 - Page Not Found</h1>
      <button onClick={() => (window.location.href = "/")}>Go Back Home</button>
    </div>
  );
};

export default ErrorPage;
