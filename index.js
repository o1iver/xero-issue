const XeroClient = require('xero-node').AccountingAPIClient;
const config = require('./config.json');

(async () => {

    const xero = new XeroClient(config);

    const invoice = (await xero.invoices.get()).Invoices[0];
    console.log(JSON.stringify(invoice,null,2));

    const [ att1, att2 ] = (await xero.invoices.attachments.get({entityId: invoice.InvoiceID})).Attachments;
    console.log(JSON.stringify(att1,null,2));
    console.log(JSON.stringify(att2,null,2));

    // This will work (filename: GoodPdf.pdf)
    await xero.invoices.attachments.downloadAttachment({
        entityId: invoice.InvoiceID,
        mimeType: att1.MimeType,
        fileName: att1.FileName,
        pathToSave: `${process.cwd()}/${att1.FileName}`});
    console.log(`Succeeded downloading '${att1.FileName}'.`);

    // This won't work (filename: Bad,Pdf.pdf)
    await xero.invoices.attachments.downloadAttachment({
        entityId: invoice.InvoiceID,
        mimeType: att2.MimeType,
        fileName: att2.FileName,
        pathToSave: `${process.cwd()}/${att2.FileName}`});

})();