using { cap.first.project as db } from '../db/schema';

service MainService {

    entity Customers as projection on db.Customers;

}