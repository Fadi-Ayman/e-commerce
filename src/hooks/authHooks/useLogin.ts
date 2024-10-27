import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../servcies/AuthApi";


function useLogin() {
  const navigate = useNavigate();
  const {
    mutate:Login,
    isPending:isLoggingIn,
  } = useMutation({
    mutationFn: signIn,
    onSuccess: (userData) => {
      toast.success("Logged In Successfully");
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/home");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { Login, isLoggingIn };
}

export default useLogin;