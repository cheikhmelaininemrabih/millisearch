import { MeiliSearch } from 'meilisearch';

const client = new MeiliSearch({
  host: 'https://ms-cca9571fd0bd-16140.nyc.meilisearch.io',
  apiKey: '4a9ba8706629d4411fe04ec7f2a73900eacfadab',
});
const updateSortableAttributes = async () => {
  const index = client.index('raceforwater');
  await index.updateSortableAttributes(['title', 'date']); // Add 'title' and 'date'
};

updateSortableAttributes()
  .then(() => console.log('Sortable attributes updated'))
  .catch((err) => console.error('Error updating sortable attributes:', err));
export const searchIndex = client.index('raceforwater');
