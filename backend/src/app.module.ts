import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { InvestorsModule } from './investors/investors.module';
import { CompaniesModule } from './companies/companies.module';
import { TokensModule } from './tokens/tokens.module';
import { PromotionsModule } from './promotions/promotions.module';
import { DividendsModule } from './dividends/dividends.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production',
      entities: [],
      migrations: [],
    }),
    AuthModule,
    InvestorsModule,
    CompaniesModule,
    TokensModule,
    PromotionsModule,
    DividendsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
