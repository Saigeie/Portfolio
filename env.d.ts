declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_API_TOKEN: string;
    }
  }
}

export {}
