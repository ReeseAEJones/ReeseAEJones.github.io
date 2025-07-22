// https://redux-toolkit.js.org/rtk-query/overview
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// Config
import { githubUsername } from "../config";

// Type definitions based on GitHub API docs
export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: string;
  bio?: string;
  [key: string]: any; 
}

export interface GithubSocialAccount {
  id: number;
  provider: string;
  url: string;
  [key: string]: any;
}

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description?: string;
  fork: boolean;
  stargazers_count: number;
  watchers_count: number;
  language?: string;
  [key: string]: any;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
  endpoints: (builder) => ({
    // https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user
    getUsers: builder.query<GithubUser, void>({
      query: () => `/users/${githubUsername}`,
    }),
    // https://docs.github.com/en/rest/users/social-accounts?apiVersion=2022-11-28#list-social-accounts-for-a-user
    getSocials: builder.query<GithubSocialAccount[], void>({
      query: () => `/users/${githubUsername}/social_accounts`,
    }),
    // https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user
    getProjects: builder.query<GithubRepo[], void>({
      query: () => `/users/${githubUsername}/repos`,
    }),
  }),
});

export const { useGetUsersQuery, useGetSocialsQuery, useGetProjectsQuery } =
  apiSlice;