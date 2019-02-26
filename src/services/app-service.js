export const RECORDS_STORAGE_KEY = 'records';

export const AppService = {
  getRecords: () => {
    try {
      const jsonValue = JSON.parse(localStorage[RECORDS_STORAGE_KEY]);
      return jsonValue;
    } catch (error) {
      return [];
    }
  },
  setRecords: value => {
    localStorage[RECORDS_STORAGE_KEY] = JSON.stringify(value);
  }
};
