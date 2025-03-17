import { useParams } from "react-router-dom";
import { Albums } from "../../components/albums";
import { Songs } from "../../components/songs";

const Homepage = () => {
  const { id } = useParams();
  return <>{id ? <Songs /> : <Albums />}</>;
};

export default Homepage;
