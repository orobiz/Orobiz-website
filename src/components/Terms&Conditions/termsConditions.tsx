import React from "react";

export default function TermsConditions() {
  return (
    <>
      <style>{`
        .terms-page {
          min-height: 100vh;
          box-sizing: border-box;
          padding: 3rem 1.5rem 4rem;
          color: #1f2933;
          background:
            radial-gradient(ellipse at 90% 12%, rgba(167, 139, 250, .22), transparent 25rem),
            radial-gradient(ellipse at 8% 72%, rgba(232, 121, 249, .18), transparent 26rem),
            linear-gradient(135deg, rgba(237, 233, 254, .5) 0%, rgba(250, 232, 255, .4) 50%, rgba(252, 231, 243, .5) 100%);
          font-family: inherit;
        }

        .terms-main {
          box-sizing: border-box;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          padding: 3rem 2.5rem 4rem;
          background: rgba(255, 255, 255, .88);
          border: 1px solid rgba(255, 255, 255, .8);
          border-radius: 20px;
          box-shadow: 0 18px 55px rgba(76, 29, 149, .07);
        }

        .terms-main h1,
        .terms-main h2,
        .terms-main h3 {
          color: #111827;
          font-family: inherit;
        }

        .terms-main h1 {
          font-size: 2rem;
          line-height: 1.2;
          margin: 0 0 .75rem;
          letter-spacing: -0.035em;
        }

        .terms-main h2 {
          font-size: 1.25rem;
          line-height: 1.4;
          margin: 2rem 0 .5rem;
          letter-spacing: -0.015em;
        }

        .terms-main p,
        .terms-main li {
          line-height: 1.7;
          font-size: .95rem;
        }

        .terms-main p {
          margin: 0 0 1rem;
        }

        .terms-main a {
          color: #7c3aed;
          text-decoration: none;
          text-underline-offset: 3px;
        }

        .terms-main a:hover {
          text-decoration: underline;
        }

        .terms-main ul {
          padding-left: 1.25rem;
          margin: .5rem 0 1rem;
        }

        .terms-updated {
          color: #6b7280;
          display: block;
          margin-bottom: 1.5rem;
          font-size: .875rem;
        }

        @media (max-width: 640px) {
          .terms-page {
            padding: 1.25rem .75rem 2rem;
          }

          .terms-main {
            padding: 2rem 1.25rem 2.5rem;
            border-radius: 16px;
          }

          .terms-main h1 {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <div className="terms-page">
        <main className="terms-main">
          <h1>Terms and Conditions</h1>
          <small className="terms-updated">Last updated: 09 December 2025</small>

          <h2>1. Introduction</h2>
          <p>
            These Terms and Conditions (“Terms”) govern your access to and use of the
            OroBiz website and any related services (collectively, the “Services”).
            By accessing or using the Services, you agree to be bound by these Terms.
            If you do not agree, you must not use the Services.
          </p>

          <h2>2. Who we are</h2>
          <p>
            OroBiz (“we”, “us”, or “our”) operates this website to provide information
            about investor relations, communications, and related advisory services.
            Contact details and additional information about how we handle personal
            data are described in our{" "}
            <a href="/privacy-policy">Privacy Policy</a>.
          </p>

          <h2>3. Use of the website</h2>
          <p>You agree to use the website only for lawful purposes and in a way that:</p>
          <ul>
            <li>Complies with all applicable laws and regulations;</li>
            <li>Does not infringe the rights of any other person or entity;</li>
            <li>Does not damage, disable, overburden, or impair the website or our infrastructure;</li>
            <li>Does not introduce malicious code such as viruses, worms, or similar software.</li>
          </ul>

          <h2>4. No client or advisory relationship</h2>
          <p>
            Information provided on this website is for general informational purposes
            only and does not constitute professional advice, an offer, or a
            commitment to provide services. Any engagement with OroBiz will be
            governed by a separate written agreement.
          </p>

          <h2>5. Accounts and submissions</h2>
          <p>
            When you submit forms (for example, contact or inquiry forms), you agree
            that the information you provide is accurate and that you have the right
            to share it with us. You must not submit content that is unlawful,
            offensive, or infringes any third-party rights.
          </p>

          <h2>6. Intellectual property</h2>
          <p>
            All content on this website, including text, graphics, logos, layouts,
            and designs, is owned by OroBiz or licensed to us and is protected by
            applicable intellectual property laws. You may view and download content
            for your own non-commercial use only. You may not copy, modify,
            distribute, or create derivative works without our prior written consent.
          </p>

          <h2>7. Third-party links and tools</h2>
          <p>
            The website may contain links to third-party websites or tools that are
            not owned or controlled by us. We are not responsible for the content,
            policies, or practices of any third-party websites or services. Your use
            of such sites is at your own risk.
          </p>

          <h2>8. Privacy and data protection</h2>
          <p>
            Your use of the Services is also governed by our{" "}
            <a href="/privacy-policy">Privacy Policy</a>, which explains how we
            collect, use, and protect your personal information when you interact with
            us. Please read it carefully before using the site or submitting any data.
          </p>

          <h2>9. Disclaimers</h2>
          <p>
            The Services are provided on an “as is” and “as available” basis. To the
            fullest extent permitted by law, we make no warranties or representations,
            express or implied, regarding the accuracy, completeness, reliability, or
            availability of the website or any content on it.
          </p>

          <h2>10. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, OroBiz and its directors,
            employees, and affiliates shall not be liable for any indirect,
            incidental, consequential, or punitive damages, or for any loss of
            profits or data, arising from or in connection with your use of, or
            inability to use, the Services.
          </p>

          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless OroBiz and its affiliates from
            and against any claims, liabilities, damages, losses, and expenses,
            including reasonable legal fees, arising out of or in any way connected
            with your breach of these Terms or your misuse of the Services.
          </p>

          <h2>12. Changes to these Terms</h2>
          <p>
            We may update or modify these Terms from time to time. When we do, we
            will revise the “Last updated” date at the top of this page. Your
            continued use of the Services after any changes means you accept the
            updated Terms.
          </p>

          <h2>13. Governing law and jurisdiction</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of
            India, without regard to its conflict-of-law principles. Any disputes
            arising out of or relating to these Terms or the Services shall be
            subject to the exclusive jurisdiction of the courts located in Mumbai,
            India.
          </p>

          <h2>14. Contact us</h2>
          <p>
            If you have any questions about these Terms, you can contact us using the
            details provided on our website contact page.
          </p>
        </main>
      </div>
    </>
  );
}
