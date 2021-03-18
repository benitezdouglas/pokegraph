import { Injectable } from '@nestjs/common';
import { ApplicationDTO } from './dto/application.dto';

@Injectable()
export class ApplicationService {
    public application(): ApplicationDTO {
        return {
            name: "pokegraph",
            version: "0.0.1",
        }
    }
}
