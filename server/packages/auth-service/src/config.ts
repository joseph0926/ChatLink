import * as dotenv from 'dotenv';
dotenv.config({});

class Config {
  public DATABASE_URL: string | undefined;
  public ELASTIC_SEARCH_URL: string | undefined;
  public API_GATEWAY_URL: string | undefined;

  constructor() {
    this.DATABASE_URL = process.env.DATABASE_URL || '';
    this.ELASTIC_SEARCH_URL = process.env.ELASTIC_SEARCH_URL || '';
    this.API_GATEWAY_URL = process.env.API_GATEWAY_URL || '';
  }
}

export const config: Config = new Config();
