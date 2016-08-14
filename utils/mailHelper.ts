let nodemailer = require('nodemailer');
let ses = require('nodemailer-ses-transport');

export let transporter = nodemailer.createTransport(ses({
    accessKeyId: process.env.AMAZON_SES_KEY,
    secretAccessKey: process.env.AMAZON_SES_SECRET
}));

export let template = function (user) {
    return    `
    <style>
/* Shrink Wrap Layout Pattern CSS */
@media only screen and (max-width: 599px) {
    td[class="hero"] img {
        width: 100%;
        height: auto !important;
    }
    td[class="pattern"] td{
        width: 100%;
    }
}
</style>

<table cellpadding="0" cellspacing="0">
<tr>
    <td class="pattern" width="600">
        <table cellpadding="0" cellspacing="0">
            <tr>
                <td class="hero">
                    <img src="https://s3.amazonaws.com/veteranconnect-assets/emailheader.jpg" alt="" style="display: block; border: 0;" />
                </td>
            </tr>
            <tr>
                <td align="left" style="font-family: arial,sans-serif; color: #333;">
                    <h1>Header Text</h1>
                </td>
            </tr>
            <tr>
                <td align="left" style="font-family: arial,sans-serif; font-size: 14px; line-height: 20px !important; color: #666; padding-bottom: 20px;">
                    ${user.firstName} dolor sit amet, consectetuer adipiscing elit. Nam cursus. Morbi ut mi. Nullam enim leo, egestas id, condimentum at, laoreet mattis, massa. Sed eleifend nonummy diam. Praesent mauris ante, elementum et, bibendum at, posuere sit amet, nibh. Duis tincidunt lectus quis dui viverra vestibulum. Suspendisse vulputate aliquam dui. Nulla elementum dui ut augue. Aliquam vehicula mi at mauris. Maecenas placerat, nisl at consequat rhoncus, sem nunc gravida justo, quis eleifend arcu velit quis lacus. Morbi magna magna, tincidunt a, mattis non, imperdiet vitae, tellus. Sed odio est, auctor ac, sollicitudin in, consequat vitae, orci. Fusce id felis. Vivamus sollicitudin metus eget eros.
                </td>
            </tr>
            <tr>
                <td align="left">
                    <a href="#"><img src="http://placehold.it/200x50/333&text=CTA+»" alt="CTA" style="display: block; border: 0;" /></a>
                </td>
            </tr>
        </table>
    </td>
</tr>
</table>
   `

}
