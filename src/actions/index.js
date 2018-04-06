let nextRecordId = JSON.parse(localStorage.getItem('records')) - 1;
let nextArticleId = 0;

export const addRecord = record => ({
  type: 'ADD_RECORD',
  id: nextRecordId++,
  record
});

export const archiveRecord = id => ({
  type: 'ARCHIVE_RECORD',
  id
});

export const addArticle = article => ({
  type: 'ADD_ARTICLE',
  id: nextArticleId++,
  article
});

export const archiveArticle = id => ({
  type: 'ARCHIVE_ARTICLE',
  id
});
