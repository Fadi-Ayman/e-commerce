import React, { createContext, useContext, useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn, signUp } from "../servcies/AuthApi";
import { updateUserTextForm, updateUserImage } from "../servcies/userApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  ApiUserData,
  LoginFormInputs,
  RegisterFormInputs,
  UpdateFormInputsType,
  UpdateUserImageType,
} from "../Types/ApiTypes";
import { useDispatch } from "react-redux";
import { resetEntireCartData } from "../store/CartSlice";

type AuthContextType = {
  isAuthenticated: boolean;
  Login: (inputs: LoginFormInputs) => void;
  Register: (inputs: RegisterFormInputs) => void;
  Logout: () => void;
  updateUser: (
    inputs: Omit<
      UpdateFormInputsType,
      "confirmPassword" | "email" | "oldPassword"
    >
  ) => void;
  updateProfileImage: (inputs: UpdateUserImageType) => void;
  isUpdatingImage: boolean;
  isRegistering: boolean;
  isLoggingIn: boolean;
  isUpdatingUser: boolean;
  userData: Omit<ApiUserData, "accessToken"> | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<Omit<
    ApiUserData,
    "accessToken"
  > | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token) {
      setIsAuthenticated(true);
      if (user) {
        setUserData(JSON.parse(user));
      }
    }
    setLoading(false); // Set loading to false after checking local storage
  }, []);

  // Login
  const { mutate: loginMutate, isPending: isLoggingIn } = useMutation({
    mutationFn: signIn,
    onSuccess: (userData: ApiUserData) => {
      const { accessToken, firstName, lastName, id, image, email } = userData;
      localStorage.setItem("token", accessToken);
      localStorage.setItem(
        "user",
        JSON.stringify({ firstName, lastName, id, image, email })
      );
      setUserData({ firstName, lastName, id, image, email });
      setIsAuthenticated(true);
      navigate("/home");
      toast.success("Logged In Successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  // Register
  const { mutate: registerMutate, isPending: isRegistering } = useMutation({
    mutationFn: signUp,
    onSuccess: (userData: ApiUserData) => {
      const { accessToken, firstName, lastName, id, image, email } = userData;
      localStorage.setItem("token", accessToken);
      localStorage.setItem(
        "user",
        JSON.stringify({ firstName, lastName, id, image, email })
      );
      setUserData({ firstName, lastName, id, image, email });
      setIsAuthenticated(true);
      navigate("/home");
      toast.success("Account Created Successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  // Update User Text Data
  const { mutate: updateUserMutate, isPending: isUpdatingUser } = useMutation({
    mutationFn: updateUserTextForm,
    onSuccess: (updatedUserData: Omit<ApiUserData, "accessToken">) => {
      const { firstName, lastName, id, image, email } = updatedUserData;
      const newUserData = { firstName, lastName, id, image, email };
      localStorage.setItem("user", JSON.stringify(newUserData));
      setUserData(newUserData);
      toast.success("Profile updated successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onMutate: () => {
      toast.loading("Updating profile...", { id: "updating-profile" });
    },
    onSettled: () => {
      toast.dismiss("updating-profile");
    },
  });

  // Update User Image
  const { mutate: updateImage, isPending: isUpdatingImage } = useMutation({
    mutationFn: updateUserImage,
    onSuccess: (updatedUserImage: string) => {
      const storedUser = JSON.parse(localStorage.getItem("user")!);
      const newUserData = { ...storedUser, image: updatedUserImage };
      localStorage.setItem("user", JSON.stringify(newUserData));
      setUserData(newUserData);
      toast.success("Profile image updated successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onMutate: () => {
      toast.loading("Updating profile image...", { id: "updating-image" });
    },
    onSettled: () => {
      toast.dismiss("updating-image");
    },
  });

  // Logout
  const Logout = () => {
    navigate("/home");
    dispatch(resetEntireCartData());
    toast.success("Logged out successfully");
    localStorage.clear();
    setUserData(null);
    setIsAuthenticated(false);
    queryClient.invalidateQueries();
  };

  const Login = (inputs: LoginFormInputs) => {
    loginMutate(inputs);
  };

  const Register = (inputs: RegisterFormInputs) => {
    registerMutate(inputs);
  };

  const updateUser = (
    inputs: Omit<
      UpdateFormInputsType,
      "confirmPassword" | "email" | "oldPassword"
    >
  ) => {
    updateUserMutate(inputs);
  };

  const updateProfileImage = (inputs: UpdateUserImageType) => {
    updateImage(inputs);
  };

  if (loading) return null; // Prevent rendering while checking local storage

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        Login,
        Register,
        Logout,
        updateUser,
        isRegistering,
        isLoggingIn,
        isUpdatingUser,
        userData,
        isUpdatingImage,
        updateProfileImage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
