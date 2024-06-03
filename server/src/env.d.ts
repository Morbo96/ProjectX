declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_NAME: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_HOST: string;
      DB_PORT: string;
      JWT_ACCESS_SECRET: string;
      JWT_REFRESH_SECRET: string;
      HUNGER_MULTIPLIER_RATE: string;
      EASY_REWARD: string;
      MEDIUM_REWARD: string;
      HARD_REWARD: string;
      PORT: string;
    }
  }
}

export {};
