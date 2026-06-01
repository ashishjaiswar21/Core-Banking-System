require('dotenv').config();
const nodemailer = require('nodemailer');

// ---------------------This code taken from Repositry 
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

// Verify the connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email server:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

//taken from sendEmail Repository
const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Backend-Banking-System" <${process.env.EMAIL_USER}>`, // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      html, // html body
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
//-------------------------------------------------

async function sendRegistrationEmail(userEmail,name) {
    // const subject = "Welcome to Backend-Banking-System ";
    // const text = `Hello ${name},Thank you for registering at Backend-Banking-System.`;
    // const html = `
    //     <p>Hello ${name},</p>
    //     <p>Thank you for registering at Backend Ledger.</p>`;

    // beautify 
    const subject = '🎉 Welcome to Backend Ledger!';
    
    // Clean text fallback for smartwatches and basic email clients
    const text = `Hello ${name},\n\nWelcome to Backend Ledger! Your account has been successfully created.\n\nWe are thrilled to have you on board. You can now securely manage your ledger, transfer funds, and track your transactions.\n\nBest regards,\nThe Backend Ledger Team`;

    // Modern HTML layout with onboarding styling
    const html = `
    <div style="background-color: #f4f6f8; padding: 30px 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden; border: 1px solid #e1e4e8;">
            <tr>
                <td style="background-color: #1a1f36; padding: 30px; text-align: center;">
                    <div style="font-size: 40px; margin-bottom: 10px;">🏦</div>
                    <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 0.5px;">Backend Ledger</h2>
                </td>
            </tr>
            
            <tr>
                <td style="padding: 30px; color: #333333;">
                    <p style="margin-top: 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
                        Hello <strong>${name}</strong>, 👋
                    </p>
                    <p style="font-size: 15px; line-height: 1.5; color: #4a5568;">
                        Welcome to the future of secure banking! We are thrilled to let you know that your account has been successfully created and is ready to use.
                    </p>
                    
                    <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 20px; margin: 25px 0; text-align: center;">
                        <span style="font-size: 12px; font-weight: 700; color: #1d4ed8; background-color: #dbeafe; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">Account Active 🟢</span>
                        <div style="font-size: 24px; font-weight: 700; color: #2563eb; margin: 12px 0 4px 0;">You're All Set!</div>
                        <div style="font-size: 13px; color: #666666;">Your secure ledger is initialized.</div>
                    </div>

                    <p style="font-size: 15px; line-height: 1.5; color: #4a5568; margin-bottom: 10px;">
                        <strong>Here is what you can do next:</strong>
                    </p>
                    <ul style="font-size: 14px; line-height: 1.6; color: #4a5568; margin-top: 0; padding-left: 20px;">
                        <li>Create a new bank account.</li>
                        <li>Execute secure, instant money transfers.</li>
                        <li>Track your real-time ledger balance.</li>
                    </ul>
                    
                    <p style="font-size: 13px; line-height: 1.5; color: #718096; margin-bottom: 0; margin-top: 25px;">
                        🔒 <em>Security Tip: We will never ask for your password via email. Please keep your credentials strictly confidential.</em>
                    </p>
                </td>
            </tr>
            
            <tr>
                <td style="background-color: #fafbfc; padding: 20px; text-align: center; border-top: 1px solid #edf2f7;">
                    <p style="margin: 0; font-size: 13px; color: #a0aec0;">
                        Best regards,<br>
                        <strong>The Backend Ledger Engineering Team</strong>
                    </p>
                </td>
            </tr>
        </table>
    </div>
    `;
    
    await sendEmail(userEmail,subject,text,html);

}
async function sendTransactionEmail(userEmail, name, amount, toAccount) {
    // const subject = 'Transaction Successful!';
    // const text = `Hello ${name},\n\nYour transaction of $${amount} to account ${toAccount} was successful.\n\nBest regards,\nThe Backend Ledger Team`;
    // const html = `<p>Hello ${name},</p><p>Your transaction of $${amount} to account ${toAccount} was successful.</p><p>Best regards,<br>The Backend Ledger Team</p>`;


    // beautify this mail
    const subject = '💸 Transaction Successful! – Backend Ledger';
    
    // Clean text fallback for push notifications/smartwatches
    const text = `Hello ${name},\n\nSuccess! Your transaction of $${amount} to account ${toAccount} was processed successfully.\n\nTransaction Details:\n- Recipient Account: ${toAccount}\n- Amount: $${amount}\n- Status: Completed ✅\n\nBest regards,\nThe Backend Ledger Team`;

    // Modern, attractive HTML layout with inline styles and emoji stickers
    const html = `
    <div style="background-color: #f4f6f8; padding: 30px 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden; border: 1px solid #e1e4e8;">
            <tr>
                <td style="background-color: #1a1f36; padding: 30px; text-align: center;">
                    <div style="font-size: 40px; margin-bottom: 10px;">✨</div>
                    <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 0.5px;">Backend Ledger</h2>
                </td>
            </tr>
            
            <tr>
                <td style="padding: 30px; color: #333333;">
                    <p style="margin-top: 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
                        Hello <strong>${name}</strong>,
                    </p>
                    <p style="font-size: 15px; line-height: 1.5; color: #4a5568;">
                        Your transfer has been processed securely. The funds have been successfully moved to the destination account.
                    </p>
                    
                    <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 20px; margin: 25px 0; text-align: center;">
                        <span style="font-size: 12px; font-weight: 700; color: #166534; background-color: #dcfce7; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">Success ✅</span>
                        <div style="font-size: 32px; font-weight: 700; color: #16a34a; margin: 12px 0 4px 0;">-$${amount}</div>
                        <div style="font-size: 13px; color: #666666;">Sent to Account: <span style="font-family: monospace; font-weight: bold; color: #333;">${toAccount}</span></div>
                    </div>
                    
                    <p style="font-size: 13px; line-height: 1.5; color: #718096; margin-bottom: 0;">
                        💡 <em>If you did not authorize this transaction, please secure your account credentials immediately or contact our support node.</em>
                    </p>
                </td>
            </tr>
            
            <tr>
                <td style="background-color: #fafbfc; padding: 20px; text-align: center; border-top: 1px solid #edf2f7;">
                    <p style="margin: 0; font-size: 13px; color: #a0aec0;">
                        Best regards,<br>
                        <strong>The Backend Ledger Engineering Team</strong>
                    </p>
                </td>
            </tr>
        </table>
    </div>
    `;
    await sendEmail(userEmail, subject, text, html);
}

async function sendTransactionFailureEmail(userEmail, name, amount, toAccount) {
    // const subject = 'Transaction Failed';
    // const text = `Hello ${name},\n\nWe regret to inform you that your transaction of $${amount} to account ${toAccount} has failed. Please try again later.\n\nBest regards,\nThe Backend Ledger Team`;
    // const html = `<p>Hello ${name},</p><p>We regret to inform you that your transaction of $${amount} to account ${toAccount} has failed. Please try again later.</p><p>Best regards,<br>The Backend Ledger Team</p>`;

    // beautify 
    const subject = '⚠️ Transaction Failed – Backend Ledger';
    
    // Clean text fallback
    const text = `Hello ${name},\n\nUnfortunately, your recent transaction of $${amount} to account ${toAccount} could not be completed.\n\nTransaction Details:\n- Attempted Transfer: $${amount}\n- Destination Account: ${toAccount}\n- Status: Failed ❌\n\nPlease check your account balance and try again. If the issue persists, please contact our support team.\n\nBest regards,\nThe Backend Ledger Team`;

    // Modern HTML layout with alert styling
    const html = `
    <div style="background-color: #f4f6f8; padding: 30px 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden; border: 1px solid #e1e4e8;">
            <tr>
                <td style="background-color: #1a1f36; padding: 30px; text-align: center;">
                    <div style="font-size: 40px; margin-bottom: 10px;">✨</div>
                    <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 0.5px;">Backend Ledger</h2>
                </td>
            </tr>
            
            <tr>
                <td style="padding: 30px; color: #333333;">
                    <p style="margin-top: 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
                        Hello <strong>${name}</strong>,
                    </p>
                    <p style="font-size: 15px; line-height: 1.5; color: #4a5568;">
                        We encountered an issue processing your recent transfer. <strong>No funds have been deducted from your account.</strong>
                    </p>
                    
                    <div style="background-color: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 20px; margin: 25px 0; text-align: center;">
                        <span style="font-size: 12px; font-weight: 700; color: #991b1b; background-color: #fee2e2; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">Failed ❌</span>
                        <div style="font-size: 32px; font-weight: 700; color: #dc2626; margin: 12px 0 4px 0;">$${amount}</div>
                        <div style="font-size: 13px; color: #666666;">Attempted to Account: <span style="font-family: monospace; font-weight: bold; color: #333;">${toAccount}</span></div>
                    </div>
                    
                    <p style="font-size: 13px; line-height: 1.5; color: #718096; margin-bottom: 0;">
                        💡 <em>Common reasons for failure include insufficient funds or network timeouts. Please verify your balance and try again. If this issue persists, reply to this email for support.</em>
                    </p>
                </td>
            </tr>
            
            <tr>
                <td style="background-color: #fafbfc; padding: 20px; text-align: center; border-top: 1px solid #edf2f7;">
                    <p style="margin: 0; font-size: 13px; color: #a0aec0;">
                        Best regards,<br>
                        <strong>The Backend Ledger Engineering Team</strong>
                    </p>
                </td>
            </tr>
        </table>
    </div>
    `;
    await sendEmail(userEmail, subject, text, html);
}

module.exports = {sendRegistrationEmail,sendTransactionEmail,sendTransactionFailureEmail};

