const cds = require('@sap/cds');

module.exports = async (srv) => {

    const db = await cds.connect.to('db');

    // srv.before('READ', 'Customers', (req) => {
        
    // })

    srv.on('CREATE', 'Customers', async (req) => {
        const data = req.data;

        const response = await INSERT(data).into(db.entities.Customers);

        console.log(response)

        return req.data;
    })

    // srv.after('CREATE', 'Customers', (req) => {
        
    // })
}