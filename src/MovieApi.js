import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjI1ZWIxNjE4NzgwNDNkMjNlMjY3Y2VkM2ViZjBhMSIsIm5iZiI6MTcyMDk3OTk1Ni43Mjc5NDksInN1YiI6IjY2OTQxMDgxYTIwNTc5YjUyMGE3YmVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ke6OCE6oHdR6zLSlBoIagaEcYoYhIudQo9WIFGXIHac",
    accept: "application/json",
  },
};

export const GetMoviesPopular = async (page) => {
  const response = await axios.get("/trending/movie/day?language=en-US", {
    params: {
      page,
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjI1ZWIxNjE4NzgwNDNkMjNlMjY3Y2VkM2ViZjBhMSIsIm5iZiI6MTcyMDk3OTk1Ni43Mjc5NDksInN1YiI6IjY2OTQxMDgxYTIwNTc5YjUyMGE3YmVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ke6OCE6oHdR6zLSlBoIagaEcYoYhIudQo9WIFGXIHac",
      accept: "application/json",
    },
  });

  return response.data;
};

export const DetailsMovieById = async (id) => {
  const response = await axios.get(`/movie/${id}?language=en-US`, options);

  return response;
};

export const GetMovieCastById = async (id) => {
  const response = await axios.get(`/movie/${id}/credits`, options);
  return response;
};

export const GetReviewsById = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews`, options);
  return response;
};

export const searchMovie = async (value, page) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params: {
        query: value,
        page,
      },
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjI1ZWIxNjE4NzgwNDNkMjNlMjY3Y2VkM2ViZjBhMSIsIm5iZiI6MTcyMDk3OTk1Ni43Mjc5NDksInN1YiI6IjY2OTQxMDgxYTIwNTc5YjUyMGE3YmVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ke6OCE6oHdR6zLSlBoIagaEcYoYhIudQo9WIFGXIHac",
        accept: "application/json",
      },
    }
  );
  return response;
};
