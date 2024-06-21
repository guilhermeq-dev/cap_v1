namespace cap.first.project;

using { cuid, managed } from '@sap/cds/common';

entity Customers : cuid, managed {
    name    : String(100);
    age     : Integer;
    order   : Association to one Orders on order.customer = $self;
}

entity Orders : cuid {
    amount      : Decimal;
    customer    : Association to one Customers;
    nf          : Association to one NFs on nf.order = $self;
}

entity NFs : cuid {
    id_fiscal   : String;
    order       : Association to one Orders;
}