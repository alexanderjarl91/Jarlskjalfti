export const formatDate = (date) => {
  return new Date(date).toDateString().substr(4, 11);
};

export const formatTime = (date) => {
  return new Date(date).toTimeString().substr(0, 9);
};
