export class Requirement {
    constructor(
        public checkInDate:Date,
        public noOfnights:number,
        public rooms:number[],
        public persons:number[],
    ){}
}
