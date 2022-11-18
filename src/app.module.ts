import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ProductsModule} from "./products/products.module";
import {MONGODB_KEY} from "../keys";

@Module({
    imports: [
        ProductsModule,
        MongooseModule.forRoot(MONGODB_KEY)
    ],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {}