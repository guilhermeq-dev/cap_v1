const cds = require('@sap/cds');

module.exports = async (srv) => {

    const db = await cds.connect.to('db');

    // const mockdata = [
    //     {
    //         ID: "25t3044e-3efd-4ae3-bd11-4453cfbbaca6",
    //         name: "John",
    //         age: 25
    //     },
    //     {
    //         ID: "33d3044e-3efd-4ae3-bd11-4453cfbbaca6",
    //         name: "Gui",
    //         age: 26
    //     },
    //     {
    //         ID: "45n3044e-3efd-4ae3-bd11-4453cfbbaca6",
    //         name: "Miranda",
    //         age: 63
    //     },
    //     {
    //         ID: "48f3044e-3efd-4ae3-bd11-4453cfbbaca6",
    //         name: "José",
    //         age: 59
    //     }
    // ]
    
    srv.before('CREATE', 'Customers', (req) => {
        console.log(req.data);
        const data = req.data;
        
        if(data.name === "Tate") {
            return req.error(400, "Name invalid.");
        }
        
        
    });

    //  srv.on('READ', 'Customers', (req) => {
    //         const map = mockdata.map((item) => {
    //             const newItem = ({...item, desc: "Customer"});
    //             return newItem;
    //         })
    //     return map;
    //  });

    srv.on('CREATE', 'Customers', async (req) => {
        const data = req.data;
        console.log(db.entities);
        console.log(data)

        const response = await INSERT(data).into(db.entities.Customers);

        console.log(response)

        return req.data;
    });
    
    srv.after('READ', 'Customers', (req) => console.log("after read"));

    srv.on('getSpecificProperties', async (req) => {
        const data = await SELECT.from(db.entities.Customers);
        console.log(data);

        return {
            name: "teste",
            age: 25
        }
    });
}