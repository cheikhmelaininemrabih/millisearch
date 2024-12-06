import { MeiliSearch } from 'meilisearch';

const client = new MeiliSearch({
  host: 'https://ms-cca9571fd0bd-16140.nyc.meilisearch.io',
  apiKey: '4a9ba8706629d4411fe04ec7f2a73900eacfadab',
});

export const searchIndex = client.index('raceforwater');
