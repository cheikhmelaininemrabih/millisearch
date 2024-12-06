import { MeiliSearch } from 'meilisearch';

const client = new MeiliSearch({
  host: 'https://ms-cca9571fd0bd-16140.nyc.meilisearch.io',
  apiKey: '4a9ba8706629d4411fe04ec7f2a73900eacfadab',
});
const getDocuments = async () => {
  const index = client.index('raceforwater');
  const documents = await index.getDocuments();
  console.log(documents);
};

getDocuments();
export const searchIndex = client.index('raceforwater');
