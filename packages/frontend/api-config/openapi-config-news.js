/** @type {import('@rtk-query/codegen-openapi').ConfigFile} */
module.exports = {
  schemaFile: '../redux/schema/api-spec-news.json',
  apiFile: '../redux/api/emptyNewsApi.ts',
  apiImport: 'emptyNewsApi',
  outputFile: '../redux/api/generated/NewsApi.ts',
  exportName: 'NewsApi',
  hooks: { lazyQueries: true, mutations: true, queries: true },
};
