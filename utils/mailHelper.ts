let nodemailer = require('nodemailer');
let ses = require('nodemailer-ses-transport');

export let transporter = nodemailer.createTransport(ses({
    accessKeyId: process.env.AMAZON_SES_KEY,
    secretAccessKey: process.env.AMAZON_SES_SECRET
}));

export let welcome = function (user) {
    return    `
    <!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style type="text/css">
      #outlook a { padding: 0; }
      .ReadMsgBody { width: 100%; }
      .ExternalClass { width: 100%; }
      .ExternalClass * { line-height:100%; }
      body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
      table, td { border-collapse:collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
      img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
      p { display: block; margin: 13px 0; }
    </style>
    <!--[if !mso]><!-->
    <style type="text/css">
      @media only screen and (max-width:480px) {
        @-ms-viewport { width:320px; }
        @viewport { width:320px; }
      }
    </style>
    <!--<![endif]-->
    <!--[if mso]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->

    <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
        <style type="text/css">

            @import url(https://fonts.googleapis.com/css?family=Open+Sans);

        </style>
      <!--<![endif]--><style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100, * [aria-labelledby="mj-column-per-100"] { width:100%!important; }
      }
    </style>
    </head>
    <body style="background: #edeff0;">
      <div style="background-color:#edeff0;"><!--[if mso | IE]>
          <table border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">
            <tr>
              <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
          <![endif]--><div style="margin:0 auto;max-width:600px;"><table cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;font-size:0px;padding:20px 0px;"><!--[if mso | IE]>
          <table border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
          <![endif]--><div aria-labelledby="mj-column-per-100" class="mj-column-per-100" style="vertical-align:top;display:inline-block;font-size:13px;text-align:left;width:100%;"><table cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-break:break-word;font-size:0px;padding:10px 25px;" align="left"><table cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="left" border="0"><tbody><tr><td style="width:100px;"><img alt="" title="" height="auto" src="https://s3.amazonaws.com/veteranconnect-email-assets/VCLogoFlat2.png" style="border:none;border-radius:;display:block;outline:none;text-decoration:none;width:100%;height:auto;" width="100"></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]>
          </td></tr></table>
          <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>
          </td></tr></table>
          <![endif]-->
          <!--[if mso | IE]>
          <table border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">
            <tr>
              <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
          <![endif]--><div style="margin:0 auto;max-width:600px;background:white;"><table cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:white;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;font-size:0px;padding:20px 0px;"><!--[if mso | IE]>
          <table border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
          <![endif]--><div aria-labelledby="mj-column-per-100" class="mj-column-per-100" style="vertical-align:top;display:inline-block;font-size:13px;text-align:left;width:100%;"><table cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-break:break-word;font-size:0px;padding:10px 25px;" align="left"><div style="cursor:auto;color:#000000;font-family:Open Sans, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;">
                            <h2>Welcome ${user.firstName}!</h2>
                        </div></td></tr><tr><td style="word-break:break-word;font-size:0px;padding:10px 25px;"><p style="font-size:1px;margin:0 auto;border-top:2px solid #000000;width:100%;"></p><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0 auto;border-top:2px solid #000000;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]--></td></tr><tr><td style="word-break:break-word;font-size:0px;padding:10px 25px;" align="center"><div style="cursor:auto;color:#000000;font-family:Open Sans, Helvetica, Arial, sans-serif;font-size:13px;line-height:30px;">
                            <p>Welcome to Veteran Connect. You've created an account, and verified your service so you are ready to roll. Veteran Connect started as an idea a few months ago, and is now a real thing. I sought to change the way we are able to connect in person, rather than just online. Since this app requires numerous users in a given area to really work, take a second and <strong>share our facebook page with veterans in your area</strong> .</p>
                        </div></td></tr><tr><td style="word-break:break-word;font-size:0px;padding:10px 25px;" align="center"><table cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:200px;"><a href="https://www.facebook.com/sharer/sharer.php?u=http%3A//www.facebook.com/veteranconnectco" target="_blank"><img alt="" title="" height="auto" src="https://s3.amazonaws.com/veteranconnect-email-assets/shareonfacebook.png" style="border:none;border-radius:;display:block;outline:none;text-decoration:none;width:100%;height:auto;" width="200"></a></td></tr></tbody></table></td></tr><tr><td style="word-break:break-word;font-size:0px;"><div style="font-size:1px;line-height:10px;"> </div></td></tr><tr><td style="word-break:break-word;font-size:0px;padding:10px 25px;" align="center"><div style="cursor:auto;color:#000000;font-family:Open Sans, Helvetica, Arial, sans-serif;font-size:13px;line-height:30px;">
                            This is only the beginning. We're developing a mobile app for iOS, Android, and Windows platforms as well as purdying up the existing web app.
                        </div></td></tr></tbody></table></div><!--[if mso | IE]>
          </td></tr></table>
          <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>
          </td></tr></table>
          <![endif]-->
          <!--[if mso | IE]>
          <table border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">
            <tr>
              <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
          <![endif]--><div style="margin:0 auto;max-width:600px;"><table cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;font-size:0px;padding:10px 25px;"><!--[if mso | IE]>
          <table border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:undefined;width:600px;">
          <![endif]--><div><div class="mj-inline-links" style="width:100%;text-align:center;"><!--[if gte mso 9]>
      			  <table border="0" cellpadding="0" cellspacing="0" align="center">
                <tr>
      		  <![endif]--><!--[if gte mso 9]>
              <td style="padding: 15px 10px">
            <![endif]--><a href="mailto:info@veteranconnect.co" style="display:inline-block;text-decoration:none;text-transform:uppercase;color:#666;font-family:Open Sans, Helvetica, Arial, sans-serif;font-size:13px;font-weight:normal;line-height:22px;padding:15px 10px;">info@veteranconnect.co</a><!--[if gte mso 9]>
              </td>
            <![endif]--><!--[if gte mso 9]>
              <td style="padding: 15px 10px">
            <![endif]--><a href="http://www.veteranconnect.co/" style="display:inline-block;text-decoration:none;text-transform:uppercase;color:#666;font-family:Open Sans, Helvetica, Arial, sans-serif;font-size:13px;font-weight:normal;line-height:22px;padding:15px 10px;">VETERAN CONNECT</a><!--[if gte mso 9]>
              </td>
            <![endif]--><!--[if gte mso 9]>
                </tr>
              </table>
            <![endif]--></div></div><!--[if mso | IE]>
          </td></tr></table>
          <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>
          </td></tr></table>
          <![endif]--></div>
    </body>
    </html>
   `

}

export let eventCreatorNotify = function (user, event) {

}

export let eventAttendeeNotify = function(user, event) {

}

export let eventCreatorComment = function(user, event) {

}

export let eventAttendeeComment = function(user, event) {
    
}
