export const getSession = async () => {
  // Check if credentials exist in localStorage
  // if (typeof window !== "undefined") {
  //   const saved = localStorage.getItem("user");
  //   if (saved) {
  //     const user = JSON.parse(saved);
  //     return { id: 1, email: user.email };
  //   }
  // }

  // I commented out the localStorage to avoid logging in automatically
  return null;
};
