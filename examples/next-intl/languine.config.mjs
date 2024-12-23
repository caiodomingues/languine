export default {
  version: "1.0.0",
  locale: {
    source: "en",
    targets: ["de"]
  },
  files: {
    json: {
      include: ["locales/[locale].json"]
    }
  },
  openai: {
    model: "gpt-4-turbo"
  }
}