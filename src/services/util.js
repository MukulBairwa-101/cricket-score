const options = {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "numeric",
  hour12: true,
};

export const formatDateTime = (date) => {
  const newDate = new Date(date);
  return new Intl.DateTimeFormat("en-US", options).format(newDate);
};
