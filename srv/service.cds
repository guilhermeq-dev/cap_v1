using { cap.first.project as db } from '../db/schema';

service MainService {

    entity Customers as projection on db.Customers;
    entity Orders as projection on db.Orders;
    entity NFs as projection on db.NFs;

}

// service RiskService {
//     entity Risks {
//         key ID : UUID;
//         title : String;
//         description : String;
//         probability : Integer;
//         impact : Integer;
//         status : String;
//     }

//     action markAsMitigated (ID : UUID) returns Boolean;
// }