import { useSelector } from 'react-redux';

const Results = () => {
  const resultsArr = useSelector((state) => state.resultsData.results);
  return (
    <div>
      <p>Hello</p>
    </div>
  );
};
export default Results;
