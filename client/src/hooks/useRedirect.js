import { useNavigate } from "react-router-dom";
const useRedirect = path => {
  const navigate = useNavigate();
  navigate(`/${path}`);
};

export default useRedirect;