const ErrorMsg = ({ items }) => {
  return <>{items.length === 0 && <h3>I'm Still hungry</h3>}</>;
};

export default ErrorMsg;
