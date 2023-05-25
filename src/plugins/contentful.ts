import contentful, { createClient } from 'contentful';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const createClientFunc = process.env.NODE_ENV === 'development' ? createClient : contentful.createClient

  const client: contentful.ContentfulClientApi<undefined> = createClientFunc({
    space: config.public.CTF_SPACE_ID,
    accessToken: config.public.CTF_CDA_ACCESS_TOKEN,
  });

  return {
    provide: {
      contentfulClient: client,
    },
  };
});