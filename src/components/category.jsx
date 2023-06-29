
import fantasy from "../data/fantasy";
import romance from "../data/romance";
import horror from "../data/horror";
import scifi from "../data/scifi";
import history from "../data/history";
import { useSelector, useDispatch } from "react-redux";
import Carton from "./Carton";
import { apiCall } from "./reducers/api";

export default function Category() {
  const dispatch = useDispatch();
  const { categoria } = useSelector((state) => state.api);

  switch (categoria) {
    case "fantasy":
      dispatch(apiCall(fantasy));
      return <Carton />;
    case "romance":
      dispatch(apiCall(romance));
      return <Carton />;
    case "horror":
      dispatch(apiCall(horror));
      return <Carton />;
    case "scifi":
      dispatch(apiCall(scifi));
      return <Carton />;
    case "history":
      dispatch(apiCall(history));
      return <Carton />;
    default:
      dispatch(apiCall(fantasy));
      return <Carton />;
  }
}

