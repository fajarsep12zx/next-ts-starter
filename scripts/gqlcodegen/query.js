const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  overwrite: true,
  generates: {
    'src/gqlcodegen/types.ts': {
      schema: process.env.NEXT_PUBLIC_GRAPHQL_HOST,
      plugins: ['typescript'],
      config: {
        skipTypename: true,
      },
    },
    'src/gqlcodegen/queries/': {
      schema: process.env.NEXT_PUBLIC_GRAPHQL_HOST,
      preset: 'near-operation-file',
      documents: 'src/gqlcodegen/queries/*.graphql',
      presetConfig: {
        extension: '.ts',
        baseTypesPath: '../types.ts',
        folder: '../hooks',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: {
        noExport: false,
        skipTypename: true,
        withMutationFn: false,
        withResultType: false,
        withMutationOptionsType: false,
      },
    },
  },
}
