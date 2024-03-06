import { useSelector } from 'react-redux';
import ResultsCard from './ResultsCard.jsx';
const Results = () => {
  const resultsArr = useSelector((state) => state.results.results);
  const cardArr = resultsArr.map((el) => {
    return <ResultsCard result={el} />;
  });
  console.log(cardArr);
  return (
    <div className='h-full bg-slate-100/75'>
      <div className='flex flex-row flex-wrap'>{cardArr}</div>
    </div>
  );
};
export default Results;
