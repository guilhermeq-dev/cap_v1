namespace cap.first.project;

using { cuid } from '@sap/cds/common';

entity Customers : cuid {
    name    : String(100);
    age     : Integer;
    order   : Composition of many Orders on order.customer = $self;
}

entity Orders : cuid {
    amount      : Decimal;
    customer    : Association to Customers;
    nf          : Association to one NFs on nf.order = $self;
}

entity NFs : cuid {
    id_fiscal   : String;
    order       : Association to Orders;
}