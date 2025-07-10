import { buildConfig } from 'payload';
import type { CollectionConfig } from 'payload';

const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
};

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET,
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
  db: {
    url: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production',
  },
  collections: [Pages],
});