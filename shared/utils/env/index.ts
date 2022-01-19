export const isDevEnv = () => {
  return process.env.NODE_ENV !== "production";
};


export default {
  isDevEnv,
};
