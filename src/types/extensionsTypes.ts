export type ExtensionsAPIResponseType = {
  results: ResultType[]
}

type ResultType = {
  extensions: ExtensionType[]
  pagingToken: any
  resultMetadata: ResultMetadaumType[]
}

export type ExtensionType = {
  publisher: PublisherType
  extensionId: string
  extensionName: string
  displayName: string
  flags: string
  lastUpdated: string
  publishedDate: string
  releaseDate: string
  shortDescription: string
  versions: VersionType[]
  categories: string[]
  tags: string[]
  statistics: StatisticType[]
  deploymentType: number
}

type PublisherType = {
  publisherId: string
  publisherName: string
  displayName: string
  flags: string
  domain: string
  isDomainVerified: boolean
}

type VersionType = {
  version: string
  flags: string
  lastUpdated: string
  files: FileType[]
  properties: PropertyType[]
  assetUri: string
  fallbackAssetUri: string
}

type FileType = {
  assetType: string
  source: string
}

type PropertyType = {
  key: string
  value: string
}

type StatisticType = {
  statisticName: string
  value: number
}

type ResultMetadaumType = {
  metadataType: string
  metadataItems: MetadataItemType[]
}

type MetadataItemType = {
  name: string
  count: number
}
