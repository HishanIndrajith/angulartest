import { Hotel } from './hotel';
import { RoomType } from './room-type';

export class Contract {
    constructor(
            public startDate:Date,
            public endDate:Date,
            public roomTypes:RoomType[],
            public hotel:Hotel,
            
    ){}
}
