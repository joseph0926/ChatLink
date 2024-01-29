import { getUsers } from "@/service/auth.service";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  const { data: users, isPending: isGetUsersLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await getUsers(),
  });

  return {
    users,
    isGetUsersLoading,
  };
};
