import { baseApi } from "./baseApi";

const communityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createComment: builder.mutation({
      query: (commentData) => ({
        url: "/community",
        method: "POST",
        body: commentData,
      }),
      invalidatesTags: ["addcomment"],
    }),
    getCommunity: builder.query({
      query: () => "/community",
      providesTags: ["addcomment"],
    }),
  }),
});

export const { useCreateCommentMutation, useGetCommunityQuery } = communityApi;
