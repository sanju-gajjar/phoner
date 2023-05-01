import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Invoice.module.css';

const Invoice = (data) => {
    const InvoiceNumber = new Date().getTime();
    const FromAddress = {
        AddressLine1: "Phoner, Mobile Accessories",
        AddressLine2: "Navrang Complex",
        City: "Kalol",
        Dist: "Gandhinagar",
        State: "Gujarat",
        Country: "India",
        Pincode: "382721",
        ContactNumber: "+91 94296 64830",
        ContactName: "Keyur Gajjar"
    }
    const printDocument = () => {
        let title = InvoiceNumber;
        let divElements = document.getElementById('divToPrint').innerHTML;
        let printWindow = window.open("", "_blank", "");
        //open the window
        printWindow.document.open();
        //write the html to the new window, link to css file
        printWindow.document.write('<html><head><title>' + title + '</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></head><body>');
        printWindow.document.write(divElements);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        //The Timeout is ONLY to make Safari work, but it still works with FF, IE & Chrome.
        setTimeout(function () {
            printWindow.print();
            printWindow.close();
        }, 100);
    }

    return (
        <div class="App container mt-5">
            <button class="btn btn-primary" onClick={printDocument}>Send for Print</button>
            <div id="divToPrint" class="m-3">

                <div class="row d-flex justify-content-center">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="d-flex justify-content-center   "> <span class="font-weight-bold">Invoice :  </span>{InvoiceNumber}</div>
                            <div class="d-flex flex-row justify-content-center">
                                <img width='300px' src='https://i.imgur.com/wmeC6uj.png' alt="logo" />
                            </div>
                            <hr />
                            <div class="table-responsive p-2">
                                <table class="table table-borderless">
                                    <tbody>
                                        <tr class="add">
                                            <td>To</td>
                                        </tr>
                                        <tr class="content">
                                            <td class="font-weight-bold">Facebook <br /> Attn: Jassa Right Polymont <br /> USA</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <hr />
                            <div class="products p-2">
                                <table class="table table-borderless">
                                    <tbody>
                                        <tr class="add">
                                            <td>Description</td>
                                            <td>Days</td>
                                            <td>Price</td>
                                            <td class="text-center">Total</td>
                                        </tr>
                                        <tr class="content">
                                            <td>Website Redesign</td>
                                            <td>15</td>
                                            <td>$1,500</td>
                                            <td class="text-center">$22,500</td>
                                        </tr>
                                        <tr class="content">
                                            <td>Logo & Identity</td>
                                            <td>10</td>
                                            <td>$1,500</td>
                                            <td class="text-center">$15,000</td>
                                        </tr>
                                        <tr class="content">
                                            <td>Marketing Collateral</td>
                                            <td>3</td>
                                            <td>$1,500</td>
                                            <td class="text-center">$4,500</td>
                                        </tr>
                                        <tr class="content">
                                            <td>Marketing Collateral</td>
                                            <td>3</td>
                                            <td>$1,500</td>
                                            <td class="text-center">$4,500</td>
                                        </tr>
                                        <tr class="content">
                                            <td>Marketing Collateral</td>
                                            <td>3</td>
                                            <td>$1,500</td>
                                            <td class="text-center">$4,500</td>
                                        </tr>
                                        <tr class="content">
                                            <td>Marketing Collateral</td>
                                            <td>3</td>
                                            <td>$1,500</td>
                                            <td class="text-center">$4,500</td>
                                        </tr>
                                        <tr class="content">
                                            <td>Marketing Collateral</td>
                                            <td>3</td>
                                            <td>$1,500</td>
                                            <td class="text-center">$4,500</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <hr />
                            <div class="products p-2">
                                <table class="table table-borderless">
                                    <tbody>
                                        <tr class="add">
                                            <td></td>
                                            <td>Subtotal</td>
                                            <td>GST(10%)</td>
                                            <td class="text-center">Total</td>
                                        </tr>
                                        <tr class="content">
                                            <td></td>
                                            <td>$40,000</td>
                                            <td>2,500</td>
                                            <td class="text-center">$42,500</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <hr />
                            <div class="address">
                                <table class="table table-borderless">
                                    <tbody>
                                        <tr class="content m-10">
                                            <td>Signature</td>
                                            <td></td>
                                        </tr>
                                        <tr class="content m-5">
                                            <td class="font-weight">
                                                {FromAddress.ContactName}
                                                -{FromAddress.AddressLine1}
                                                -{FromAddress.AddressLine2}
                                                -{FromAddress.City}
                                                -{FromAddress.State}
                                                -{FromAddress.Country}
                                                -{FromAddress.Pincode}
                                                -{FromAddress.ContactNumber}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )

}

export default Invoice;