import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../servcies/AuthApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function useRegister() {
  const navigate = useNavigate();
  const {
    mutate:Register,
    isPending:isRegistering,
  } = useMutation({
    mutationFn: signUp,
    onSuccess: (userData) => {
      toast.success("Account Created Successfully");
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/home");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { Register, isRegistering };
}

export default useRegister;