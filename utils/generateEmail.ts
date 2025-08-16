interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
  services: string[];
}

interface EmailCustomizationData {
  companyName: string;
  brandColor: string;
  logoUrl: string;
  customGreeting: string;
  footerText: string;
}

export function generateEmailHTML(
  data: EmailData,
  customization?: EmailCustomizationData
): string {
  const custom = customization || {
    companyName: "Roxstein",
    brandColor: "#4162bf",
    logoUrl: "",
    customGreeting: "",
    footerText:
      "This inquiry was submitted through the website's contact form.",
  };

  const servicesList =
    data.services.length > 0
      ? data.services
          .map(
            (service) =>
              `<li style="margin: 4px 0; padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; line-height: 1.5; color: #374151;">${service}</li>`
          )
          .join("")
      : '<li style="margin: 4px 0; padding: 8px 0; font-size: 14px; line-height: 1.5; color: #9ca3af; font-style: italic;">No specific services requested</li>';

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const logoSection = custom.logoUrl
    ? `<img src="${custom.logoUrl}" alt="${custom.companyName}" style="max-height: 32px; margin-bottom: 16px;" />`
    : "";

  const greetingText = custom.customGreeting
    ? custom.customGreeting
    : `${data.name} has submitted a new contact form inquiry.`;

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission from - ${data.name}</title>
      <style>
          body, table, td, p, h1, h2, h3 {
              margin: 0;
              padding: 0;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          }
          body {
              background-color: #f9fafb;
              color: #111827;
              line-height: 1.6;
          }
          .email-container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
          }
          .header {
              background-color: #ffffff;
              padding: 32px 32px 24px 32px;
              border-bottom: 1px solid #e5e7eb;
          }
          .header-title {
              color: #111827;
              font-size: 24px;
              font-weight: 600;
              margin-bottom: 4px;
          }
          .header-subtitle {
              color: #6b7280;
              font-size: 14px;
              font-weight: normal;
          }
          .content {
              padding: 32px;
          }
          .greeting {
              background-color: #f9fafb;
              padding: 20px;
              border-radius: 12px;
              margin-bottom: 32px;
          }
          .greeting-text {
              font-size: 16px;
              color: #374151;
              margin-bottom: 4px;
          }
          .greeting-date {
              font-size: 13px;
              color: #6b7280;
          }
          .section {
              margin-bottom: 32px;
          }
          .section-title {
              font-size: 16px;
              font-weight: 600;
              color: #111827;
              margin-bottom: 16px;
              padding-bottom: 8px;
              border-bottom: 1px solid #e5e7eb;
          }
          .field-row {
              margin-bottom: 16px;
              padding: 16px 0;
              border-bottom: 1px solid #f3f4f6;
          }
          .field-row:last-child {
              border-bottom: none;
              margin-bottom: 0;
          }
          .field-label {
              font-weight: 600;
              color: #374151;
              font-size: 13px;
              margin-bottom: 4px;
              display: block;
          }
          .field-value {
              color: #111827;
              font-size: 15px;
              line-height: 1.5;
              word-wrap: break-word;
          }
          .field-value-email {
              color: ${custom.brandColor};
              font-weight: 500;
          }
          .services-container {
              background-color: #f9fafb;
              padding: 20px;
              border-radius: 12px;
              border: 1px solid #e5e7eb;
          }
          .services-list {
              margin: 8px 0 0 0;
              padding: 0;
              list-style: none;
          }
          .message-container {
              background-color: #f9fafb;
              padding: 20px;
              border-radius: 12px;
              border: 1px solid #e5e7eb;
          }
          .cta-section {
              background-color: ${custom.brandColor};
              padding: 20px;
              border-radius: 12px;
              text-align: center;
              margin-top: 32px;
          }
          .cta-text {
              color: #ffffff;
              font-size: 15px;
              margin-bottom: 16px;
          }
          .cta-button {
              background-color: #ffffff;
              color: ${custom.brandColor};
              padding: 10px 20px;
              border-radius: 10px;
              text-decoration: none;
              font-weight: 500;
              display: inline-block;
              font-size: 14px;
          }
          .footer {
              background-color: #f9fafb;
              padding: 20px 32px;
              border-top: 1px solid #e5e7eb;
              text-align: center;
          }
          .footer-text {
              color: #6b7280;
              font-size: 13px;
              line-height: 1.5;
          }
          .company-branding {
              color: ${custom.brandColor};
              font-weight: 500;
          }
      </style>
  </head>
  <body>
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f9fafb;">
          <tr>
              <td align="center" style="padding: 20px;">
                  <table class="email-container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 17px; overflow: hidden; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);">
                      
                      <!-- Header -->
                      <tr>
                          <td class="header" style="background-color: #ffffff; padding: 32px 32px 24px 32px; border-bottom: 1px solid #e5e7eb;">
                              ${logoSection}
                             
                              <p class="header-subtitle" style="color: #6b7280; font-size: 14px; font-weight: normal;">Received via <span class="company-branding" style="color: ${
                                custom.brandColor
                              }; font-weight: 500;">${
    custom.companyName
  }</span> contact form</p>
                          </td>
                      </tr>
                      
                      <!-- Content -->
                      <tr>
                          <td class="content" style="padding: 32px;">
                              
                              <!-- Greeting -->
                              <div class="greeting" style="background-color: #f9fafb; padding: 20px; border-radius: 12px; margin-bottom: 32px;">
                                  <p class="greeting-text" style="font-size: 16px; color: #374151; margin-bottom: 4px;">
                                      ${greetingText}
                                  </p>
                                  <p class="greeting-date" style="font-size: 13px; color: #6b7280;">
                                      ${currentDate}
                                  </p>
                              </div>
                              
                              <!-- Contact Information Section -->
                              <div class="section" style="margin-bottom: 32px;">
                                  <h2 class="section-title" style="font-size: 16px; font-weight: 600; color: #111827; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid #e5e7eb;">
                                      Contact Information
                                  </h2>
                                  
                                  
                                  
                                  <div class="field-row" style="margin-bottom: 16px; padding: 16px 0; border-bottom: 1px solid #f3f4f6;">
                                      <span class="field-label" style="font-weight: 600; color: #374151; font-size: 13px; margin-bottom: 4px; display: block;">Email</span>
                                      <span class="field-value field-value-email" style="color: ${
                                        custom.brandColor
                                      }; font-size: 15px; line-height: 1.5; word-wrap: break-word; font-weight: 500;">${
    data.email || "Not provided"
  }</span>
                                  </div>
                                  
                                  <div class="field-row" style="margin-bottom: 16px; padding: 16px 0; border-bottom: 1px solid #f3f4f6;">
                                      <span class="field-label" style="font-weight: 600; color: #374151; font-size: 13px; margin-bottom: 4px; display: block;">Phone</span>
                                      <span class="field-value" style="color: #111827; font-size: 15px; line-height: 1.5; word-wrap: break-word;">${
                                        data.phone || "Not provided"
                                      }</span>
                                  </div>
                              </div>
                              
                              <!-- Services Section -->
                              <div class="section" style="margin-bottom: 32px;">
                                  <h2 class="section-title" style="font-size: 16px; font-weight: 600; color: #111827; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid #e5e7eb;">
                                      Services Requested
                                  </h2>
                                  <div class="services-container" style="background-color: #f9fafb; padding: 20px; border-radius: 12px; border: 1px solid #e5e7eb;">
                                      <ul class="services-list" style="margin: 8px 0 0 0; padding: 0; list-style: none;">
                                          ${servicesList}
                                      </ul>
                                  </div>
                              </div>
                              
                              <!-- Message Section -->
                              ${
                                data.message
                                  ? `
                              <div class="section" style="margin-bottom: 32px;">
                                  <h2 class="section-title" style="font-size: 16px; font-weight: 600; color: #111827; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid #e5e7eb;">
                                      Message
                                  </h2>
                                  <div class="message-container" style="background-color: #f9fafb; padding: 20px; border-radius: 12px; border: 1px solid #e5e7eb;">
                                      <div class="field-value" style="color: #111827; font-size: 15px; line-height: 1.5; word-wrap: break-word;">${data.message.replace(
                                        /\n/g,
                                        "<br>"
                                      )}</div>
                                  </div>
                              </div>
                              `
                                  : ""
                              }
                              
                              <!-- Call to Action -->
                              <div class="cta-section" style="background-color: ${
                                custom.brandColor
                              }; padding: 20px; border-radius: 12px; text-align: center; margin-top: 32px;">
                                  <p class="cta-text" style="color: #ffffff; font-size: 15px; margin-bottom: 16px;">
                                      Ready to respond to this inquiry?
                                  </p>
                                  <a href="mailto:${
                                    data.email
                                  }" class="cta-button" style="background-color: #ffffff; color: ${
    custom.brandColor
  }; padding: 10px 20px; border-radius: 12px; text-decoration: none; font-weight: 500; display: inline-block; font-size: 14px;">
                                      Reply to ${
                                        data.name.split(" ")[0] || "Contact"
                                      }
                                  </a>
                              </div>
                          </td>
                      </tr>
                      
                      <!-- Footer -->
                      <tr>
                          <td class="footer" style="background-color: #f9fafb; padding: 20px 32px; border-top: 1px solid #e5e7eb; text-align: center;">
                              <p class="footer-text" style="color: #6b7280; font-size: 13px; line-height: 1.5;">
                                  ${custom.footerText}
                              </p>
                          </td>
                      </tr>
                      
                  </table>
              </td>
          </tr>
      </table>
  </body>
  </html>`;
}

export function generateEmailText(
  data: EmailData,
  customization?: EmailCustomizationData
): string {
  const custom = customization || {
    companyName: "Your Company",
    brandColor: "#667eea",
    logoUrl: "",
    customGreeting: "",
    footerText:
      "This inquiry was submitted through your website's contact form.",
  };

  const servicesList =
    data.services.length > 0
      ? data.services.join(", ")
      : "No specific services requested";

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const greetingText = custom.customGreeting
    ? custom.customGreeting
    : `${data.name} has submitted an inquiry.`;

  return `
  NEW CONTACT INQUIRY - ${custom.companyName.toUpperCase()}
  
  ${greetingText}
  Received on ${currentDate}
  
  CONTACT INFORMATION
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Email: ${data.email || "Not provided"}
  Phone: ${data.phone || "Not provided"}
  
  SERVICES REQUESTED
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ${servicesList}
  
  ${
    data.message
      ? `MESSAGE
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ${data.message}
  
  `
      : ""
  }NEXT STEPS
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Reply directly to: ${data.email}
  
  ---
  ${custom.footerText}
  `;
}
