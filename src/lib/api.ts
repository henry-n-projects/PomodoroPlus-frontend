export const api = {
  get: async (url: string) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}${url}`, {
      credentials: "include",
    });

    return res.json();
  },
};
