import * as dotenv from 'dotenv';
dotenv.config({});

class Config {
  public DATABASE_URL: string | undefined;
  public ELASTIC_SEARCH_URL: string | undefined;
  public ELASTIC_PASSWORD: string | undefined;
  public ELASTIC_USERNAME: string | undefined;
  public API_GATEWAY_URL: string | undefined;
  public CLIENT_URL: string | undefined;
  public JWT_TOKEN: string | undefined;

  constructor() {
    this.DATABASE_URL = process.env.DATABASE_URL || '';
    this.ELASTIC_SEARCH_URL = process.env.ELASTIC_SEARCH_URL || '';
    this.ELASTIC_PASSWORD = process.env.ELASTIC_PASSWORD || '';
    this.ELASTIC_USERNAME = process.env.ELASTIC_USERNAME || '';
    this.API_GATEWAY_URL = process.env.API_GATEWAY_URL || '';
    this.CLIENT_URL = process.env.CLIENT_URL || '';
    this.JWT_TOKEN = process.env.JWT_TOKEN || '';
  }
}

export const config: Config = new Config();
