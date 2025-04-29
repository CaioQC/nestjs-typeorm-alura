import { Injectable } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm"
import * as dotenv from "dotenv"

dotenv.config()

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory{
    constructor(private configService: ConfigService){}
    createTypeOrmOptions(): TypeOrmModuleOptions{
        return {
            type: "postgres",
            host: this.configService.get<string>("DB_HOST"),
            port: this.configService.get<number>("DB_PORT"),
            username: this.configService.get<string>("DB_USER"),
            password: this.configService.get<string>("DB_PASSWORD"),
            database: this.configService.get<string>("DB_DATABASE"),
            schema: this.configService.get<string>("DB_SCHEMA"),
            entities: [__dirname + "/**/*.entity{.js,.ts}"],
            synchronize: true
        }
    }
}