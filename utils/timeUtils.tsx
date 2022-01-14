export const dateToIso = (date: Date) => {
  return date ? new Date(date).toISOString() : null;
};

export const isoToDate = (timestamp: Date) => {
  return timestamp ? new Date(timestamp) : null;
};
