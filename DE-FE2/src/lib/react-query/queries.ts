import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import service from "@/lib/server/helper";
import { newUser, user } from "@/types";
import { property } from "@/types/index";

const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: newUser) => service.register(user),
  });
};

const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: user) => service.login(user),
  });
};

const useSignOutAccount = () => {
  return useMutation({
    mutationFn: service.logout,
  });
};

const useGetProperties = () => {
  return useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: service.getProperties,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      // console.log(lastPage);

      return lastPage.data.nextCursor;
    },
  });
};

const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (post: property) => service.postProperty(post),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getrecentposts"],
      });
    },
  });
};

const useGetUserProperties = () => {
  return useQuery({
    queryKey: ["userproperties"],
    queryFn: () => service.getUserProperties,
  });
};

const useGetPropertyById = (id?:string) => {
  return useQuery({
    queryKey:["usepropertyId",id],
    queryFn: ()=> service.getPropertyById(id!),
    enabled: !!id
  })
};

export {
  useCreateUserAccount,
  useSignInAccount,
  useSignOutAccount,
  useGetProperties,
  useCreatePost,
  useGetUserProperties,
  useGetPropertyById
};
