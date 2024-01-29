import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config({});

class Config {
  public NODE_ENV: string | undefined;
  public DATABASE_URL: string | undefined;
  public JWT_TOKEN: string | undefined;
  public CLOUD_NAME: string | undefined;
  public CLOUD_API_KEY: string | undefined;
  public CLOUD_API_SECRET: string | undefined;
  public CLIENT_URL: string | undefined;
  public SECRET_KEY_ONE: string | undefined;
  public SECRET_KEY_TWO: string | undefined;

  constructor() {
    this.NODE_ENV = process.env.NODE_ENV || "";
    this.JWT_TOKEN = process.env.JWT_TOKEN || "";
    this.DATABASE_URL = process.env.DATABASE_URL || "";
    this.CLOUD_NAME = process.env.CLOUD_NAME || "";
    this.CLOUD_API_KEY = process.env.CLOUD_API_KEY || "";
    this.CLOUD_API_SECRET = process.env.CLOUD_API_SECRET || "";
    this.CLIENT_URL = process.env.CLIENT_URL || "";
    this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE || "";
    this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO || "";
  }

  public cloudinaryConfig(): void {
    cloudinary.v2.config({
      cloud_name: this.CLOUD_NAME,
      api_key: this.CLOUD_API_KEY,
      api_secret: this.CLOUD_API_SECRET,
    });
  }
}

export const config: Config = new Config();
