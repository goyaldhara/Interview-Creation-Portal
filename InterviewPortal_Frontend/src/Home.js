import InterviewList from "./InterviewList";
import useFetch from "./useFetch";
import { API_URL } from "./config/config.js";

const Home = () => {
  const {
    data: interviews,
    isPending,
    error,
  } = useFetch(`${API_URL}/v1/interviews/upcoming`);

  return (
    <div className="home">
      {error && <div>{"Unable to fetch interviews"}</div>}
      {isPending && <div>Loading...</div>}
      {interviews && interviews.length > 0 && error == null && (
        <InterviewList interviews={interviews} title={"Upcoming Interviews"} />
      )}
      {interviews && interviews.length <= 0 && error == null && (
        <div>No Upcoming interviews.</div>
      )}
    </div>
  );
};

export default Home;
