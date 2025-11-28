import useAuthUser from "../hooks/useAuthUser.js";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completeOnboarding } from "../lib/api.js";
import { toast } from "react-hot-toast";

const OnboardingPage = () => {

  const { authUser } = useAuthUser();
  const queryClient = useQueryClient();

  const [formState, setFormState] = useState({
    fullName: authUser?.fullName || "",
    bio: authUser?.bio || "",
    nativeLanguage: authUser?.nativeLanguage || "",
    learningLanguage: authUser?.learningLanguage || "",
    location: authUser?.location || "",
    profilePic: authUser?.profilePic || "",
  });

  const { mutate: onboardingMutation, isPending } = useMutation({
    mutationFn: completeOnboarding,
    onSuccess: () => {
      toast.success("Profile onboarded successfully");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onboardingMutation(formState);
  };

  return (
    <div>
      Onboarding
    </div>
  )
}

export default OnboardingPage
